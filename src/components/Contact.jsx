import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { brand } from '../data/content'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    // Build mailto
    const subject = encodeURIComponent(`Project Inquiry from ${data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nCompany: ${data.get('company')}\nService: ${data.get('service')}\n\nProject Details:\n${data.get('message')}`
    )
    window.open(`mailto:${brand.email}?subject=${subject}&body=${body}`)
  }

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-xs font-semibold tracking-wider uppercase mb-6">
            Contact Us
          </span>
          <h2 className="font-black mb-4 leading-[1.05] text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]">
            How Can We{' '}
            <span className="bg-gradient-to-r from-[#DACAFF] to-[#8B4FBF] bg-clip-text text-transparent">
              Help You?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Elevate your website and supercharge your digital marketing results with Maven Marketing Group!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                  <input name="name" required placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Your Email</label>
                  <input name="email" type="email" required placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                  <input name="phone" placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Company Name</label>
                  <input name="company" placeholder="Acme Inc"
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all placeholder:text-gray-600" />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Service Interested In</label>
                <select name="service" defaultValue="" required
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%238E8E93' viewBox='0 0 16 16'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}>
                  <option value="" disabled>Select a service</option>
                  <option value="Custom Website Build">Custom Website Build</option>
                  <option value="Website Management">Website Management</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Tell us about your project</label>
                <textarea name="message" rows="4" placeholder="Describe your project, goals, and budget..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A25] border border-white/8 text-white text-sm focus:border-[#612C8B] focus:ring-2 focus:ring-[#612C8B]/20 outline-none transition-all resize-none placeholder:text-gray-600" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] rounded-xl font-semibold text-white hover:shadow-[0_8px_30px_rgba(97,44,139,0.4)] transition-all duration-300 hover:-translate-y-0.5">
                <Send size={18} />
                Submit
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Office image */}
            <div className="relative overflow-hidden rounded-2xl h-44">
              <img src="/images/office.jpg" alt="Maven Marketing Group office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white text-sm font-semibold">
                {brand.shortName} HQ · {brand.address.city}, {brand.address.state}
              </div>
            </div>

            {[
              { icon: Phone, label: 'Phone', value: brand.phone, href: `tel:${brand.phone.replace(/[^+\d]/g, '')}` },
              { icon: Mail, label: 'Email', value: brand.email, href: `mailto:${brand.email}` },
              { icon: MapPin, label: 'Address', value: `${brand.address.street}\n${brand.address.city}, ${brand.address.state} ${brand.address.zip}` },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <div key={i} className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-[#612C8B]/30 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-[#612C8B]/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#8B4FBF]" />
                </div>
                <div>
                  <div className="text-sm font-bold mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="text-gray-400 text-sm hover:text-[#8B4FBF] transition-colors whitespace-pre-line">{value}</a>
                  ) : (
                    <span className="text-gray-400 text-sm whitespace-pre-line">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
