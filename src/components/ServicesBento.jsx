import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { services } from '../data/content'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

function ServiceTextCard({ index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass rounded-3xl overflow-hidden hover:border-[#612C8B]/30 transition-all duration-500 md:col-span-2 md:row-span-2"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#612C8B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 p-10 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#612C8B]/20 to-[#8B4FBF]/10 flex items-center justify-center">
            <Sparkles size={28} className="text-[#8B4FBF]" />
          </div>
          <span className="text-xs text-gray-600 font-mono">✦</span>
        </div>

        <h3 className="font-bold mb-4 text-2xl leading-snug">
          Is Your Website Design and Digital Marketing Partner Delivering Real Results?
        </h3>

        <div className="flex flex-col gap-4 text-base text-gray-400 leading-relaxed">
          <p>
            Elevate your website and supercharge your digital marketing results with Maven Marketing Group!
          </p>
          <p>
            Our custom-built websites and web management services enhance user experiences through strategic, brand-focused storytelling while driving high conversions.
          </p>
          <p>
            Discover a fresh approach to digital marketing: websites designed with purpose drive leads, boost engagement, and propel your sales to new heights.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function ServiceBento({ service, index, isLarge, onNavigate }) {
  const [ref, inView] = useInView()
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative glass rounded-3xl overflow-hidden hover:border-[#612C8B]/30 transition-all duration-500 ${
        isLarge ? 'md:col-span-2 md:row-span-2' : 'md:col-span-2'
      }`}
    >
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#612C8B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative z-10 ${isLarge ? 'p-10' : 'p-7'} h-full flex flex-col`}>
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-[#612C8B]/20 to-[#8B4FBF]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={28} className="text-[#8B4FBF]" />
          </div>
          <span className="text-xs text-gray-600 font-mono">0{index + 1}</span>
        </div>

        <h3 className={`font-bold mb-3 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
          {service.title}
        </h3>

        <p className="text-gray-400 text-base leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.features.map((f, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium">
              {f}
            </span>
          ))}
        </div>

        {isLarge && (
          <div className="border-t border-white/5 pt-5 mt-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-[#612C8B]/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-[#8B4FBF]" />
                  </div>
                  {h}
                </div>
              ))}
            </div>
          </div>
        )}

        <a
          onClick={() => onNavigate('/contact')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B4FBF] hover:text-[#DACAFF] transition-colors mt-auto cursor-pointer group/link"
        >
          Start Your Project
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function ServicesBento({ onNavigate }) {
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Elevate Your Business
            <br />
            with{' '}
            <span
              style={{ fontFamily: "'Sora', sans-serif" }}
              className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent text-5xl md:text-7xl font-extrabold"
            >
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Is your website design and digital marketing partner delivering real results? Elevate your website and supercharge your digital marketing results with Maven Marketing Group!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-auto">
          <ServiceTextCard index={0} />
          {services.map((service, i) => (
            <ServiceBento key={service.id} service={service} index={i + 1} isLarge={false} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  )
}
