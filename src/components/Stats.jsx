import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView, useCountUp } from '../hooks/useAnimations'
import { stats } from '../data/content'

function StatCard({ stat, index }) {
  const [ref, inView] = useInView()
  const [count, startCount] = useCountUp(stat.value, 2000, true)
  const startedRef = useRef(false)

  useEffect(() => {
    if (inView && !startedRef.current) {
      startedRef.current = true
      startCount()
    }
  }, [inView, startCount])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="relative group"
    >
      <div className="glass rounded-3xl p-8 text-center hover:border-[#612C8B]/30 transition-all duration-500 h-full">
        <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-[#DACAFF] to-[#612C8B] bg-clip-text text-transparent mb-2">
          {stat.prefix}{count.toLocaleString()}{stat.suffix}
        </div>
        <div className="text-white font-semibold text-lg mb-3">{stat.label}</div>
        <p className="text-gray-500 text-base leading-relaxed">{stat.description}</p>
      </div>
    </motion.div>
  )
}

export default function Stats() {
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
            The Maven Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Boost Your Bottom-Line with<br />
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              The Best Digital Marketing Agency
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A website is the cornerstone of your business's digital presence. You can't afford to trust its design, development, and maintenance to just anyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
