import { useState } from 'react'
import logo from '../assets/logo.png'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#dev', label: 'Dev Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" aria-label="Pat's Tech Help">
            <img src={logo} alt="Pat's Tech Help" className="h-12 w-12 rounded-full object-cover" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Help Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-slate-800 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-2.5 px-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 block text-center bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              Get Help Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
