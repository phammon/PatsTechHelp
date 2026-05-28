import React, { useState } from 'react'

export default function Pay() {
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      // Call backend to create Stripe Checkout session
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, email, name })
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError('Failed to start payment. Please try again.')
      }
    } catch {
      setError('Payment error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Pay Your Invoice</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="number"
          min="1"
          step="0.01"
          placeholder="Amount (USD)"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-full bg-gray-950 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-base font-medium px-4 py-2 rounded-lg"
        >
          {loading ? 'Redirecting…' : 'Pay with Card'}
        </button>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        {/* success state removed, as it was unused */}
      </form>
      <p className="text-xs text-gray-400 mt-4">Payments are processed securely by Stripe. All major credit cards accepted.</p>
    </div>
  )
}
