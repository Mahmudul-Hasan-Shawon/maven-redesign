import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { team } from '../data/content'
import { Code, Megaphone, Sparkles } from 'lucide-react'

export default function Team() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6">
            The Marketing Mavens
          </span>
          <h2 className="font-black mb-4 leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              {team.title}
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {team.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-[#612C8B]/30 to-[#8B4FBF]/30 blur-2xl" />
            <img
              src="/images/team.jpg"
              alt="The Maven Marketing team collaborating in the studio"
              className="relative rounded-3xl w-full h-[420px] object-cover border border-white/10"
              loading="lazy"
            />
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass rounded-3xl p-8 hover:border-[#612C8B]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#612C8B]/20 flex items-center justify-center flex-shrink-0">
                  <Code size={24} className="text-[#8B4FBF]" />
                </div>
                <h3 className="text-xl font-black">{team.webMasters.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-base">{team.webMasters.body}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-8 hover:border-[#612C8B]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8B4FBF]/20 flex items-center justify-center flex-shrink-0">
                  <Megaphone size={24} className="text-[#8B4FBF]" />
                </div>
                <h3 className="text-xl font-black">{team.marketers.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-base">{team.marketers.body}</p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="rounded-3xl p-8 md:p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #4A1F6B 0%, #612C8B 50%, #8B4FBF 100%)' }}
        >
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
            <Sparkles size={28} className="text-white/80 flex-shrink-0" />
            <p className="text-white text-lg md:text-xl font-semibold leading-relaxed">
              {team.callout}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
