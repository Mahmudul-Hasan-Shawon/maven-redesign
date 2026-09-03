import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'

const partners = [
  { src: '/images/partner-woo.webp', alt: 'Certified WooCommerce Partner' },
  { src: '/images/partner-google.png', alt: 'Google Partner' },
  { src: '/images/partner-shopify.png', alt: 'Shopify Certified Partner' },
  { src: '/images/partner-hubspot.webp', alt: 'HubSpot Platinum Partner' },
  { src: '/images/partner-meta.png', alt: 'Meta Business Partner' },
  { src: '/images/partner-bigcommerce.png', alt: 'BigCommerce Certified Partner' },
  { src: '/images/partner-wordpress.png', alt: 'WordPress Partner' },
  { src: '/images/partner-semrush.png', alt: 'Semrush Partner' },
]

export default function LogoMarquee() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 overflow-hidden border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center text-gray-400 text-xl sm:text-xl font-semibold"
        >
          Trusted by startups, creatives, and suits alike
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
        <div className="flex gap-28 animate-marquee" style={{ width: 'max-content', paddingLeft: '3rem' }}>
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-[65px]"
            >
              <img src={p.src} alt={p.alt} loading="lazy" style={{ maxHeight: '65px', maxWidth: '110px', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
