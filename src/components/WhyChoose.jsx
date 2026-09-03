import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { reasons } from '../data/content'
import { ArrowRight } from 'lucide-react'

function ReasonCard({ reason, index, hovered }) {
  const [ref, inView] = useInView()
  const Icon = reason.icon

  const animation = hovered === null
    ? { opacity: [0.2, 1, 0.2] }
    : { opacity: hovered ? 1 : 0.2 }

  const transition = hovered === null
    ? { duration: 1.6, delay: index * 1.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: reasons.length * 1.6 - 1.6 }
    : { duration: 0.6 }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group relative glass rounded-3xl p-7 hover:border-[#612C8B]/30 transition-all duration-500 hover:-translate-y-1"
    >
      <motion.div
        animate={animation}
        transition={transition}
        className="absolute top-5 right-6 text-6xl font-black leading-none bg-gradient-to-br from-[#8B4FBF]/80 to-[#612C8B]/25 bg-clip-text text-transparent select-none"
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#612C8B]/20 to-[#8B4FBF]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-[#8B4FBF]" />
      </div>
      <h3 className="font-bold text-lg mb-3">{reason.title}</h3>
      <p className="text-gray-400 text-base leading-relaxed mb-5">{reason.description}</p>
      <a className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B4FBF] hover:text-[#DACAFF] transition-colors cursor-pointer group/link">
        Start Your Project
        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  )
}

export default function WhyChoose() {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(null)

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6">
            7 Reasons For Success
          </span>
          <h2 className="font-black leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Why Choose Maven For{' '}
            <span className="block bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              Web Design &amp; Marketing
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <ReasonCard reason={reason} index={i} hovered={hovered === null ? null : hovered === i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
