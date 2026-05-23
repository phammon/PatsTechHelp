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

const ServiceCard = ({ icon, title, desc }: { icon: string; title: string; desc: string }) => (
  <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-800 transition-all group">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
)

const Services = () => (
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

export default Services
