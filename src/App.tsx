import { useState } from 'react'
import patrickAvatar from './assets/patrick-avatar.png'
import logo from './assets/logo.png'

// ─── Replace with your Formspree form ID ─────────────────────────────────────
// 1. Log in at https://formspree.io
// 2. Create a new form → copy the ID (e.g. "xabcdefg")
// 3. Replace YOUR_FORM_ID below
const FORMSPREE_URL = 'https://formspree.io/f/mgodgapl'
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_EMAIL = 'phammonn@gmail.com'
const CONTACT_PHONE = '410-322-2029'

const techServices = [
  {
    icon: '🖥️',
    title: 'PC Tune-Up',
    desc: "Slow computer? I'll clean it up, optimize startup programs, clear junk files, and get it running like new again.",
  },
  {
    icon: '🦠',
    title: 'Virus & Malware Removal',
    desc: 'Complete removal of viruses, spyware, ransomware, and adware. Your system will be clean and protected.',
  },
  {
    icon: '🖨️',
    title: 'Printer & Device Setup',
    desc: "Printers, scanners, smart home devices — if it connects, I can get it set up and working on your network.",
  },
  {
    icon: '💾',
    title: 'Data Migration',
    desc: "Moving to a new computer? I'll transfer all your files, photos, emails, and settings safely to your new machine.",
  },
  {
    icon: '⬆️',
    title: 'OS Upgrades',
    desc: 'Upgrade to Windows 11, the latest macOS, or migrate between operating systems — painlessly and without data loss.',
  },
  {
    icon: '🔧',
    title: 'General Tech Help',
    desc: "Email setup, password managers, smart TVs, phones — if you're stuck, I can help. No problem too small.",
  },
]

const devServices = [
  {
    icon: '🌐',
    title: 'Custom Websites',
    desc: 'Professional websites built with React, TypeScript, and modern tooling. Fast, mobile-friendly, and designed to help your business grow.',
  },
  {
    icon: '⚙️',
    title: 'Web & Desktop Apps',
    desc: 'Full-stack apps using .NET Framework, .NET Core, React, and Node.js — with databases, user auth, dashboards, and APIs built to fit your workflow.',
  },
  {
    icon: '📱',
    title: 'iOS & Android Apps',
    desc: 'Cross-platform mobile apps built with React Native for both iPhone and Android, plus native iOS development. From concept to App Store.',
  },
]

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#dev', label: 'Dev Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

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

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">

        {/* Two-column layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 mb-16">

          {/* Left: text */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse inline-block" />
              Available for new clients
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              Tech Problems?
              <br />
              <span className="text-blue-400">I've Got You Covered.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl mb-8">
              Local, friendly, and affordable tech support — from virus removal and PC tune-ups to
              custom websites and mobile apps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                Get Help Now →
              </a>
              <a
                href="#services"
                className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                See Services
              </a>
            </div>

            <a
              href="https://nextdoor.com/page/pats-tech-help-wildwood-fl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-base text-slate-300 hover:text-white transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Reviewed on Nextdoor by local neighbors
              <span className="text-green-400">→</span>
            </a>
          </div>

          {/* Right: logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110" />
              <img
                src={logo}
                alt="Pat's Tech Help"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl shadow-blue-900/50"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
          {[
            { num: '100+', label: 'Happy Clients' },
            { num: '5 ★', label: 'Average Rating' },
            { num: 'Same Day', label: 'Response' },
            { num: 'Free', label: 'Consultation' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-bold text-blue-400">{s.num}</div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Jeffrey Jones',
    neighborhood: 'Villages of Parkwood',
    quote:
      "Pat's Tech Help has been an absolute lifesaver. Pat is knowledgeable, professional, and incredibly patient. He shows up on time, explains technology in a way that's easy to understand, and never makes you feel rushed or overwhelmed. What stands out most is his trustworthiness and genuine desire to help. If you're in The Villages and looking for someone who has integrity, is reliable, honest, and easy to work with — I highly recommend Pat's Tech Help.",
  },
  {
    name: 'Jeannette Laspopoulos',
    neighborhood: 'Orange Blossom',
    quote:
      "Patrick impressed me. He asked me what I needed. He stayed until it happened. Not one complaint from this mastermind. Also I think he has good intentions for the community. I would definitely have him back!",
  },
  {
    name: 'Lori Oliver',
    neighborhood: 'Villages of Parkwood',
    quote:
      "Patrick is a computer wizard that I found on Nextdoor. He kept in touch so I knew exactly when he'd be here. He is very good with computers and answered all my questions. What makes him different from the others is he's very friendly and kind. I feel like I made a new friend! Call him — you won't be disappointed!",
  },
]

function Testimonials() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Neighbors Are Saying</h2>
          <a
            href="https://nextdoor.com/page/pats-tech-help-wildwood-fl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Verified reviews from Nextdoor
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-yellow-400 text-lg tracking-wider">★★★★★</div>
                <span className="text-xs text-green-500 font-medium bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">Nextdoor</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs mt-0.5">{t.neighborhood}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <>
      <section id="services" className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Tech Support Services</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Whether your computer is crawling, you've got a virus, or you just need something set
              up — I handle it all.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section id="dev" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Custom Development</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Need something built from scratch? I design and develop websites, web apps, and iPhone
              apps.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {devServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <p className="text-center text-slate-500 mt-10 text-sm">
            See more of my work at{' '}
            <a
              href="https://patrickhammon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              patrickhammon.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src={patrickAvatar}
              alt="Patrick — Pat's Tech Help"
              className="w-52 h-64 rounded-2xl object-cover object-top border-4 border-blue-500/30 shadow-xl shadow-blue-900/20"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Hi, I'm Patrick 👋</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              I'm a software engineer and tech enthusiast. Whether it's fixing a frustrating computer
              problem or building a full-stack web app for your startup, I love helping people get
              more out of technology.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              With years of experience in professional software development and hands-on tech
              support, I bring quality work at prices that make sense for individuals and small
              businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', '.NET Core', '.NET Framework', 'React Native', 'Node.js', 'iOS & Android', 'PC & Mac Support'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
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
          {status === 'sent' ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-white text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-slate-400">Thanks! I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  What do you need help with?
                </label>
                <select
                  name="service"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
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
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Pat's Tech Help. All rights reserved.
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            Services
          </a>
          <a href="#dev" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            Dev Work
          </a>
          <a href="#about" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            About
          </a>
          <a href="#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            Contact
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`}
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            {CONTACT_PHONE}
          </a>
          <a
            href="https://nextdoor.com/page/pats-tech-help-wildwood-fl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 text-sm transition-colors"
          >
            Nextdoor
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
