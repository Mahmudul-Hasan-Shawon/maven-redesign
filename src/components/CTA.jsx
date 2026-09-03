import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { ArrowRight } from 'lucide-react'

export default function CTA({ onNavigate }) {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(74,31,107,0.96) 0%, rgba(97,44,139,0.92) 40%, rgba(139,79,191,0.9) 100%)'
          }}
        >
          {/* Background image */}
          <img src="/images/success.png" alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,1) 100%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1) 100%)' }} />
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/60 via-[#0A0A0F]/25 to-[#0A0A0F]/0" />
          {/* Decorative circles */}
          {/* <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" /> */}
          {/* <div className="absolute top-1/2 right-10 w-24 h-24 rounded-full bg-white/5" /> */}

          <div className="relative z-10 text-left">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Start Your Success Story
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl">
              Connect With A Marketing Maven Now. Elevate your website and supercharge your digital marketing results.
            </p>
            <a
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#4A1F6B] rounded-full font-bold text-lg hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              Start Your Project
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
