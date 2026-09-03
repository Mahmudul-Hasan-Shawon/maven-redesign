import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { packages } from '../data/content'
import { ArrowRight, Check, BadgeCheck } from 'lucide-react'

export default function ServicesPackages({ onNavigate }) {
  const [ref, inView] = useInView()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#612C8B]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative glass rounded-3xl p-8 hover:border-[#612C8B]/30 hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#612C8B]/25 to-[#8B4FBF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={26} className="text-[#8B4FBF]" />
                </div>
                <h3 className="text-xl font-black mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-base mb-6">{pkg.blurb}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-[#612C8B]/20 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-[#8B4FBF]" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    onClick={() => onNavigate('/contact')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B4FBF] hover:text-[#DACAFF] transition-colors cursor-pointer group/link"
                  >
                    Get Started <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Uptime + trust highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mt-10 rounded-3xl p-8 text-center relative overflow-hidden cursor-pointer"
          style={{ background: 'linear-gradient(135deg, #4A1F6B 0%, #612C8B 55%, #8B4FBF 100%)' }}
        >
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/10" />
          <div className={`relative flex flex-col md:flex-row items-center justify-center gap-4 transition-all duration-500 ${isHovered ? 'blur-sm opacity-0' : 'blur-none opacity-100'}`}>
            <BadgeCheck size={32} className="text-white/90 flex-shrink-0" />
            <p className="text-white text-lg font-semibold">
              Let us help you build a website that not only looks great but also drives results. Contact us today to discuss your project.
            </p>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <a
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4A1F6B] rounded-full font-bold text-lg hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
