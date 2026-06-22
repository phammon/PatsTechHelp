import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Testimonials />
    <Services />
    <Pricing />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default App