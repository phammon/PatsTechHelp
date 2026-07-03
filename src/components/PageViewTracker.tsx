import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ANALYTICS_TRACK_API } from '../constants'

function getOrCreateVisitorId(): string {
  const storageKey = 'pth_visitor_id'
  const existing = localStorage.getItem(storageKey)
  if (existing) return existing
  const created = `v_${Math.random().toString(36).slice(2)}_${Date.now()}`
  localStorage.setItem(storageKey, created)
  return created
}

export default function PageViewTracker() {
  const location = useLocation()

  useEffect(() => {
    const visitorId = getOrCreateVisitorId()
    const payload = {
      path: `${location.pathname}${location.search}`,
      source: 'website',
      referrer: document.referrer || null,
      visitorId,
    }

    // Keep this fire-and-forget so it never blocks page interaction.
    fetch(ANALYTICS_TRACK_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {
      // Ignore tracking errors in the public site experience.
    })
  }, [location.pathname, location.search])

  return null
}
