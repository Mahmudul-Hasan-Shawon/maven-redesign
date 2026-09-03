import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { reasons } from '../data/content'
import { ArrowRight } from 'lucide-react'

function ReasonCard({ reason, index }) {
  const [ref, inView] = useInView()
  const Icon = reason.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group glass rounded-3xl p-7 hover:border-[#612C8B]/30 transition-all duration-500 hover:-translate-y-1"
    >
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
            Why Choose Maven{' '}
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              For Web Design & Marketing
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
