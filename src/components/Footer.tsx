import { CONTACT_EMAIL, CONTACT_PHONE } from '../constants'

const Footer = () => (
  <footer className="bg-slate-950 border-t border-slate-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Pat's Tech Help. All rights reserved.
      </div>
      <div className="flex items-center gap-6 flex-wrap justify-center">
        <a href="#services" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Services</a>
        <a href="#dev" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Dev Work</a>
        <a href="#about" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">About</a>
        <a href="#contact" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Contact</a>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300 text-sm transition-colors">{CONTACT_EMAIL}</a>
        <a href={`tel:${CONTACT_PHONE}`} className="text-blue-400 hover:text-blue-300 text-sm transition-colors">{CONTACT_PHONE}</a>
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

export default Footer
