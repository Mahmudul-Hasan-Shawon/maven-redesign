import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { vision } from '../data/content'
import { Eye, Rocket } from 'lucide-react'

export default function VisionMission() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#612C8B]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#8B4FBF]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6">
            Vision & Mission
          </span>
          <h2 className="font-black mb-4 leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
            {vision.title.split(' & ')[0]}{' '}
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              & {vision.title.split(' & ')[1]}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {vision.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden hover:border-[#612C8B]/30 transition-all duration-500 group"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#612C8B]/10 blur-3xl group-hover:bg-[#612C8B]/20 transition-colors duration-500" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#612C8B] to-[#8B4FBF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye size={26} className="text-white" />
            </div>
            <h3 className="text-2xl font-black mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-base">
              {vision.callout}
            </p>
          </motion.div>

          {/* Mission card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="rounded-3xl p-8 md:p-10 relative overflow-hidden hover:-translate-y-1 transition-all duration-500"
            style={{ background: 'linear-gradient(135deg, #4A1F6B 0%, #612C8B 50%, #8B4FBF 100%)' }}
          >
            <div className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full bg-white/10" />
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6 backdrop-blur-sm">
              <Rocket size={26} className="text-white" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white">Our Mission</h3>
            <p className="text-white/80 leading-relaxed text-base">
              To empower businesses with purpose-driven websites and data-backed marketing strategies that generate real, measurable growth.
            </p>
            <p className="text-white/80 leading-relaxed mt-4 text-base">
              We excel in crafting custom websites and marketing strategies that truly connect with your audience — from design to deployment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
