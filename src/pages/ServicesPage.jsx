import { motion } from 'framer-motion'
import ServicesPackages from '../components/ServicesPackages'

export default function ServicesPage({ onNavigate }) {
  return (
    <>
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6"
          >
            Web Design Packages • Website Management Services • Freelance Digital Marketing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-black mb-6 leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]"
          >
            Digital Marketing{' '}
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Companies all around the world use our freelance digital marketing services to generate leads,
            land new clients, & (most importantly) increase sales! Checkout some of the services we offer
            below – if you aren't sure if we offer what you're looking for, just contact Maven Marketing
            Group and we'll be happy to help you out or point you in the right direction! Simply put –
            Maven Marketing Group is here to help!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#8B4FBF] text-white font-semibold text-lg hover:bg-[#9a5fd0] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
      <ServicesPackages onNavigate={onNavigate} />
    </>
  )
}
