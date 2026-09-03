import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { Send, ArrowRight, Sparkles } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const subject = encodeURIComponent(`Project Inquiry from ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nCompany: ${data.get('company')}\nService: ${data.get('service')}\n\nProject Details:\n${data.get('message')}`
    )
    window.open(`mailto:info@mavenmarketinggroup.com?subject=${subject}&body=${body}`)
  }

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#612C8B]/10 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#8B4FBF]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          {/* <span className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6">
            Get In Touch
          </span> */}
          <h2 className="font-black mb-4 leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to transform your digital presence? We're here to help you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4A1F6B 0%, #431E61 50%, #4A2668 100%)' }}>
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/10" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                    <Sparkles size={22} className="text-white" />
                  </div>
                  <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">Why Maven?</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                  Elevate your website and supercharge your digital marketing results
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <ArrowRight size={18} className="text-white/60 mt-1 flex-shrink-0" />
                    <p className="text-white/80 leading-relaxed">
                      Our custom-built websites and web management services enhance user experiences through strategic, brand-focused storytelling while driving high conversions.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight size={18} className="text-white/60 mt-1 flex-shrink-0" />
                    <p className="text-white/80 leading-relaxed">
                      Discover a fresh approach to digital marketing: websites designed with purpose drive leads, boost engagement, and propel your sales to new heights.
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <p className="text-white font-semibold text-lg">
                    Contact Maven Marketing Group today to discuss our web design packages, website management services, or freelance digital marketing services!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 h-full flex flex-col">
              {/* <h3 className="text-xl font-black mb-2">Start Your Project</h3>
              <p className="text-gray-400 text-sm mb-8">Fill out the form and we'll get back to you within 24 hours.</p> */}

              <div className="space-y-5 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                    <input name="name" required placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Email</label>
                    <input name="email" type="email" required placeholder="john@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                    <input name="phone" placeholder="(555) 123-4567"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Company Name</label>
                    <input name="company" placeholder="Acme Inc"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Service Interested In</label>
                  <select name="service" defaultValue="" required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%238E8E93' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
                    <option value="" disabled>Select a service</option>
                    <option value="Custom Website Build">Custom Website Build</option>
                    <option value="Website Management">Website Management</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Tell us about your project</label>
                  <textarea name="message" rows="4" placeholder="Describe your project, goals, and budget..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all resize-none placeholder:text-gray-600" />
                </div>
              </div>

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 mt-auto bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] rounded-xl font-semibold text-white hover:shadow-[0_8px_30px_rgba(97,44,139,0.4)] transition-all duration-300 hover:-translate-y-0.5">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
