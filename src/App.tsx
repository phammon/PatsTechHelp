import { AVAILABLE_TODAY, CONTACT_PHONE } from './constants'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => (
  <div className="min-h-screen">
    {AVAILABLE_TODAY && (
      <div className="bg-green-600 text-white text-sm font-medium text-center py-2.5 px-4">
        <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse mr-2 align-middle" />
        Available for same-day visits today! —{' '}
        <a href="#contact" className="underline underline-offset-2 hover:text-green-100 transition-colors">
          Book now
        </a>
        {' '}or call/text{' '}
        <a href={`tel:${CONTACT_PHONE}`} className="underline underline-offset-2 hover:text-green-100 transition-colors">
          {CONTACT_PHONE}
        </a>
      </div>
    )}
    <Navbar />
    <Hero />
    <Testimonials />
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default App
