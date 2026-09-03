import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { brand } from '../data/content'


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {/* ===== Row 1: Image Left, Text Right ===== */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#612C8B]/30 to-[#8B4FBF]/30 blur-2xl" />
            <img
              src="/images/about.jpg"
              alt="Maven Marketing Group office and team at work"
              className="relative rounded-3xl w-full h-[450px] object-cover border border-white/10"
              loading="lazy"
            />
          </div>
          <div>
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
          </div>
        </motion.div>

        {/* ===== Row 2: Vision — Text Left, Visual Right ===== */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>

            <h3 className="text-2xl md:text-6xl font-black mb-6">
              Our{' '}
              <span className="text-[#612C8B]">Vision</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We excel in crafting custom websites and marketing strategies that truly connect with your audience. Every design decision is made with your audience in mind — blending aesthetics with performance to create digital experiences that resonate and convert.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#612C8B]/20 to-[#8B4FBF]/20 blur-2xl" />
            <img
              src="/images/vision.png"
              alt="Our Vision"
              className="relative rounded-3xl w-full h-[420px] object-cover border border-white/10"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ===== Row 3: Mission — Visual Left, Text Right ===== */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#8B4FBF]/20 to-[#612C8B]/20 blur-2xl" />
            <img
              src="/images/mission.png"
              alt="Our Mission"
              className="relative rounded-3xl w-full h-[420px] object-cover border border-white/10"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-6xl font-black mb-6">
              Our{' '}
              <span className="text-[#8B4FBF]">Mission</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              As a leading website management and digital marketing agency, our expertise covers website management, conversion rate optimization, SEO, and UI/UX design — offering a comprehensive approach that consistently delivers results.
            </p>
          </div>
        </motion.div>

        {/* ===== Row 4: Marketing Mavens — Text Left, Visual Right ===== */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>   
            <h3 className="text-2xl md:text-8xl font-black mb-6">
              The{' '}
              <span className="text-[#fffeff]">Marketing</span>
              <span className="text-[#612c8b]"> Mavens</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Maven, we bring together the finest minds in digital strategy and web design. Our web masters craft powerhouse platforms optimized for SEO, and our online marketers devise bespoke digital marketing campaigns that dominate industries.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-[#DACAFF]/5 to-[#8B4FBF]/15 blur-2xl" />
            <img
              src="/images/maven.png"
              alt="The Marketing Mavens"
              className="relative rounded-3xl w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Location */}
        <motion.div variants={fadeUp} className="glass rounded-3xl p-8 md:p-12">
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
      </motion.div>
    </section>
  )
}
