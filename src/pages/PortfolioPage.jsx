import { motion } from 'framer-motion'
import FeaturedSpotlight from '../components/FeaturedSpotlight'
import Portfolio from '../components/Portfolio'
import CTA from '../components/CTA'

export default function PortfolioPage({ onNavigate }) {
  return (
    <>
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-black mb-4 leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]"
          >
            Purpose Driven{' '}
            <span>
              Websites That Build Your Brand
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From custom website builds to e-commerce platforms, we craft digital experiences that drive results.
          </motion.p>
        </div>
      </section>
      <FeaturedSpotlight onNavigate={onNavigate} />
      <Portfolio onNavigate={onNavigate} />
      <CTA onNavigate={onNavigate} />
    </>
  )
}
