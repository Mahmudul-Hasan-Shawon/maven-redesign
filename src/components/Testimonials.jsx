import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { testimonials } from '../data/content'
import { Quote } from 'lucide-react'

function TestimonialCard({ t }) {
  return (
    <div className="glass rounded-3xl p-7 min-w-[350px] max-w-[400px] flex-shrink-0 hover:border-[#612C8B]/30 transition-all duration-500 group">
      <Quote size={28} className="mb-4 group-hover:text-[#8B4FBF]/60 transition-colors text-[color-mix(in_oklab,#8B4FBF_60%,transparent)]" />
      <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-6">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#612C8B] to-[#8B4FBF] flex items-center justify-center font-bold text-sm">
          {t.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-gray-500 text-xs">
            {t.role}{t.company ? `, ${t.company}` : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section ref={containerRef} className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black">
            From The Best Clients{' '}
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              In The World
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Single row marquee - slow, pauses on hover */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
        <div className="marquee-track overflow-hidden">
          <div className="flex gap-5 marquee-slow" style={{ width: 'max-content' }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
