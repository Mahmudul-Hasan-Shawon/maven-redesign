import { motion } from 'framer-motion'
import About from '../components/About'
import Values from '../components/Values'
import Stats from '../components/Stats'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function AboutPage({ onNavigate }) {
  return (
    <>
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6"
          >
            About Maven
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-4"
          >
            Who Is{' '}
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              Maven Marketing Group?
            </span>
          </motion.h1>
        </div>
      </section>
      <About onNavigate={onNavigate} />
      <Stats />
      <Values />
      <Team onNavigate={onNavigate} />
      <Testimonials />
      <CTA onNavigate={onNavigate} />
    </>
  )
}
