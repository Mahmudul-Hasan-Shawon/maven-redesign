import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const routes = {
  '/': Home,
  '/services': ServicesPage,
  '/portfolio': PortfolioPage,
  '/about': AboutPage,
  '/contact': ContactPage,
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, smoothWheel: true })
    window.lenis = lenis
    return () => {
      lenis.destroy()
      window.lenis = undefined
    }
  }, [])

  
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 0.8 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navigate = (href) => {
    window.history.pushState({}, '', href)
    setPath(href)
    window.dispatchEvent(new Event('route-change'))
    scrollToTop()
  }

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname)
      window.dispatchEvent(new Event('route-change'))
      scrollToTop()
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const Page = routes[path] || routes['/']

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-[#612C8B]/40">
      <Navbar onNavigate={navigate} activePath={path} />
      <main>
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  )
}
