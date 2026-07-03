import { useState } from 'react'
import { CONTACT_API, CONTACT_EMAIL, CONTACT_PHONE } from '../constants'

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [service, setService] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('service') ?? 'pc-tuneup'
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      service: data.get('service'),
      message: data.get('message'),
      _honeypot: data.get('_honeypot'),
    }

    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {status === 'sent' ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-white mb-3">Message Sent!</h2>
            <p className="text-slate-400 text-lg">Thanks! I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Let's Get Started</h2>
              <p className="text-slate-400 text-lg">
                Drop me a message and I'll get back to you the same day. First consultation is always
                free.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                {CONTACT_EMAIL}
              </a>
              <span className="text-slate-600 mx-2 hidden sm:inline">·</span>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="inline-block mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                {CONTACT_PHONE}
              </a>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot — hidden from real users, bots fill it in */}
                <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    What do you need help with?
                  </label>
                  <select
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="hourly-visit">In-Home / Remote Visit ($75/hr)</option>
                    <option value="care-package">Annual Care Package ($299/yr)</option>
                    <option value="pc-tuneup">PC Tune-Up</option>
                    <option value="virus-removal">Virus &amp; Malware Removal</option>
                    <option value="printer-setup">Printer &amp; Device Setup</option>
                    <option value="data-migration">Data Migration</option>
                    <option value="os-upgrade">OS Upgrade</option>
                    <option value="website">Custom Website</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">iOS / Mobile App</option>
                    <option value="other">General Tech Help / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me what's going on..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      email me directly
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Contact