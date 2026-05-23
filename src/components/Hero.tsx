import logo from '../assets/logo.png'

const Hero = () => (
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

export default Hero
