import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { portfolio } from '../data/content'
import { ArrowRight, Star } from 'lucide-react'

export default function FeaturedSpotlight({ onNavigate }) {
  const [ref, inView] = useInView()
  const project = portfolio.find((p) => p.featured) || portfolio[0]

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem]"
        >
          <div className="absolute inset-0">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/95 via-[#0A0A0F]/80 to-[#0A0A0F]/40" />
          </div>

          <div className="relative p-8 md:p-14 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E85D04]/15 border border-[#E85D04]/30 text-[#FF9B42] text-xs font-bold uppercase tracking-wider mb-6">
              <Star size={14} />
              Featured Project
            </div>
            <h3 className="text-2xl md:text-4xl font-black mb-3">{project.name}</h3>
            <div className="text-sm font-semibold text-[#8B4FBF] uppercase tracking-wider mb-4">
              {project.category}
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {project.blurb} What started as a passion project became a full-scale e-commerce success — custom-built, lightning fast, and designed to convert.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {project.services.split(', ').map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
            <a
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] rounded-full font-semibold text-sm text-white hover:shadow-[0_8px_30px_rgba(97,44,139,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              See How We Can Help You <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
