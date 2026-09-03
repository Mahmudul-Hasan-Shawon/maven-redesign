import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { brand } from '../data/content'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-8">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#612C8B]/30 to-[#8B4FBF]/30 blur-2xl" />
              <img
                src="/images/about.jpg"
                alt="Maven Marketing Group office and team at work"
                className="relative rounded-3xl w-full h-[280px] object-cover border border-white/10"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-6">
              Bringing Small Businesses Into{' '}
              <span className="text-[#8B4FBF]">The Digital Age</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Maven Marketing Group was founded in {brand.founded} on the core principle of bringing small businesses into the digital age. We are a Chicago based company, with clients all over the United States (& world).
              </p>
              <p>
                Maven Marketing Group has matured into a full-stack freelance digital marketing agency that focuses on offering high-quality web design packages, website management services, and freelance digital marketing services!
              </p>
              <p>
                Although we have not abandoned our roots, our main focus is on providing our clients with the best freelance digital marketing experience you can find out there!
              </p>
              <p className="text-white font-medium">
                Your vision mixed with our creative skills will always drive the best results. We are the best in service for your business' digital goals!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            {/* Vision Card */}
            <div className="glass rounded-3xl p-8 border-l-4 border-l-[#612C8B]">
              <h4 className="text-lg font-bold mb-3">Our Vision</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                We excel in crafting custom websites and marketing strategies that truly connect with your audience.
              </p>
            </div>

            {/* Mission Card */}
            <div className="glass rounded-3xl p-8 border-l-4 border-l-[#8B4FBF]">
              <h4 className="text-lg font-bold mb-3">Our Mission</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                As a leading website management and digital marketing agency, our expertise covers website management, conversion rate optimization, SEO, and UI/UX design, offering a comprehensive approach that consistently delivers results.
              </p>
            </div>

            {/* Team Card */}
            <div className="glass rounded-3xl p-8 border-l-4 border-l-[#DACAFF]">
              <h4 className="text-lg font-bold mb-3">The Marketing Mavens</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                At Maven, we bring together the finest minds in digital strategy and web design. Our web masters craft powerhouse platforms optimized for SEO, and our online marketers devise bespoke digital marketing campaigns that dominate industries.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black mb-4">Based in {brand.address.city}, {brand.address.state}</h3>
              <p className="text-gray-400 mb-2">{brand.address.street}</p>
              <p className="text-gray-400 mb-4">{brand.address.city}, {brand.address.state} {brand.address.zip}</p>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-bold">Open Mon-Sun</span>
                <span className="text-gray-400 text-sm">9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="bg-[#1A1A25] rounded-2xl aspect-video overflow-hidden relative">
              <img src="/images/office.jpg" alt={`Maven office in ${brand.address.city}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-sm font-semibold">
                📍 {brand.address.city}, {brand.address.state}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
