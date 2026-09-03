import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks, brand } from '../data/content'

export default function Navbar({ onNavigate, activePath }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (href) => {
    onNavigate(href)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0F]/80 backdrop-blur-2xl border-b border-white/5 py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a onClick={() => navigate('/')} className="flex items-center cursor-pointer">
            <img src="/images/logo.png" alt={brand.name} className="h-10 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={() => navigate(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activePath === link.href
                    ? 'bg-[#612C8B]/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            onClick={() => navigate('/contact')}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] rounded-full text-sm font-semibold text-white hover:shadow-[0_8px_30px_rgba(97,44,139,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            Start Your Project <ArrowRight size={16} />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white z-50"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0F]/98 backdrop-blur-3xl z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => navigate(link.href)}
                  className={`text-3xl font-bold cursor-pointer transition-colors ${
                    activePath === link.href ? 'text-[#DACAFF]' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => navigate('/contact')}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] rounded-full font-semibold cursor-pointer"
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
