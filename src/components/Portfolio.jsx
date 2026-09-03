import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { portfolio, categories } from '../data/content'
import { ExternalLink, ArrowRight } from 'lucide-react'

function PortfolioCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="glass rounded-3xl overflow-hidden hover:border-[#612C8B]/30 transition-all duration-500 hover:-translate-y-2 h-full">
        {/* Visual */}
        <div className="h-52 relative overflow-hidden">
          <img src={project.image} alt={project.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#E85D04]/90 text-white text-xs font-bold">
              FEATURED
            </div>
          )}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={16} className="text-white" />
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="text-xs font-semibold text-[#8B4FBF] uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h3 className="text-lg font-bold mb-2">{project.name}</h3>
          <p className="text-gray-500 text-base line-clamp-2 mb-2">{project.blurb}</p>
          <p className="text-gray-600 text-xs">{project.services}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio({ onNavigate, home }) {
  const [ref, inView] = useInView()
  const [active, setActive] = useState('All')

  const visibleProjects = home ? portfolio.slice(0, 6) : portfolio

  const filtered = active === 'All'
    ? visibleProjects
    : visibleProjects.filter((p) => p.category === active)

  return (
    <section ref={ref} className="py-32 px-6 pb-0">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          {home && (
            <>
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6">
                Featured Project
              </span>
              <h2 className="font-black mb-4 leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
                Grow Your Business Online
                <br />
                <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">Purpose Driven Websites</span>
              </h2>
            </>
          )}
        </motion.div>

        {/* Filters */}
        <div className="sticky top-4 z-30 mb-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 p-2 rounded-full border border-white/10 bg-[#12121A]/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? 'bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] text-white shadow-[0_4px_20px_rgba(97,44,139,0.5)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <PortfolioCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          {home && (
            <a
              onClick={() => onNavigate('/portfolio')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] rounded-full font-semibold text-white hover:shadow-[0_8px_30px_rgba(97,44,139,0.4)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              View All Projects
              <ArrowRight size={16} />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
