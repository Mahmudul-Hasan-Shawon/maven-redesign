import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useAnimations'
import { brand } from '../data/content'
import { Phone, Mail, MapPin, Clock, Send, Check, ArrowRight, ArrowUpRight } from 'lucide-react'

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  ),
  facebook: (
    <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
  ),
  twitter: (
    <svg viewBox="0 0 512 512" width="15" height="15" fill="currentColor"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 448 512" width="15" height="15" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
  ),
}

const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Our Work', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const serviceLinks = [
  'Custom Website Design',
  'Website Development',
  'Website Management',
  'SEO Services',
  'Digital Marketing',
  'E-commerce Solutions',
  'Logo & Branding',
]

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' },
]

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [ref, inView] = useInView()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }

  return (
    <footer ref={ref} className="relative overflow-hidden bg-[#07070C] border-t border-white/5">
      {/* Glow accents */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#612C8B]/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/5 w-[400px] h-[400px] rounded-full bg-[#8B4FBF]/10 blur-[140px] pointer-events-none" />

      {/* ===== Main CTA Card (maven.png) ===== */}
      <div className="relative max-w-6xl mx-auto px-6 pt-16">
        <motion.div {...fadeUp} className="cta-card">
          <div className="cta-card-glow cta-card-glow-one" />
          <div className="cta-card-glow cta-card-glow-two" />
          <div className="cta-noise" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left">
              <span className="cta-badge">
                <span className="cta-badge-dot" />
                Independent creative studio
              </span>
              <h2 className="cta-heading">
                Let&rsquo;s create something
                <br />
                impossible to ignore.
              </h2>
              <p className="cta-sub">
                Strategy, design and digital experiences made for brands ready to move differently.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a onClick={() => onNavigate('/contact')} className="cta-primary">
                  Start a project <ArrowRight size={18} />
                </a>
                <a onClick={() => onNavigate('/portfolio')} className="cta-secondary group">
                  View selected work <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="cta-art"
              aria-hidden="true"
            >
              <div className="cta-art-halo" />
              <img src="/images/maven.png" alt="" className="cta-art-img" />
              <div className="cta-float cta-float-square"><span /></div>
              <div className="cta-float cta-float-circle"><span /></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Newsletter CTA strip */}
      <div className="relative max-w-6xl mx-auto px-6 pt-16">
        <div
          className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #4A1F6B 0%, #612C8B 55%, #8B4FBF 100%)' }}
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/5" />
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Stay in the Loop
              </h3>
              <p className="text-white/75 text-base">
                Get the latest marketing tips, success stories, and exclusive offers — straight to your inbox.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-4">
                <Check size={20} className="text-white" />
                <span className="text-white font-semibold">You're subscribed! Welcome to the Maven family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 min-w-[260px] px-5 py-4 rounded-2xl bg-white/15 border border-white/20 text-white text-sm placeholder:text-white/60 focus:border-white/50 focus:ring-2 focus:ring-white/30 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#4A1F6B] rounded-2xl font-bold text-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Subscribe <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a onClick={() => onNavigate('/')} className="block mb-5 cursor-pointer">
              <img src="/images/logo.png" alt={brand.name} className="h-10 w-auto mb-1" />
            </a>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Custom built websites and digital marketing services for businesses of all sizes. Based in {brand.address.city}, {brand.address.state} — serving clients nationwide and worldwide.
            </p>
            <div className="flex gap-3">
              {Object.entries(brand.social).map(([platform, url]) => {
                const Icon = socialIcons[platform] || socialIcons.instagram
                return (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                    aria-label={platform}
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#612C8B] hover:to-[#8B4FBF] hover:text-white transition-all duration-300 hover:-translate-y-1">
                    {Icon}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">Explore</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <a onClick={() => onNavigate(link.href)}
                    className="group inline-flex items-center gap-2 text-gray-500 text-sm hover:text-[#8B4FBF] transition-colors cursor-pointer">
                    <span className="h-px w-0 group-hover:w-4 bg-[#8B4FBF] transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a onClick={() => onNavigate('/services')}
                    className="group inline-flex items-center gap-2 text-gray-500 text-sm hover:text-[#8B4FBF] transition-colors cursor-pointer">
                    <span className="h-px w-0 group-hover:w-4 bg-[#8B4FBF] transition-all duration-300" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#8B4FBF] mt-0.5 flex-shrink-0" />
                <a href={`tel:${brand.phone.replace(/[^+\d]/g, '')}`} className="text-gray-500 text-sm hover:text-[#8B4FBF] transition-colors">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#8B4FBF] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-gray-500 text-sm hover:text-[#8B4FBF] transition-colors break-all">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#8B4FBF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">
                  {brand.address.street}<br />
                  {brand.address.city}, {brand.address.state} {brand.address.zip}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#8B4FBF] mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm">Open Mon-Sun · 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-[#8B4FBF] transition-colors text-xs">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cta-card {
          position: relative;
          overflow: hidden;
          padding: clamp(2.4rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem);
          border-radius: 2rem;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
          background: linear-gradient(135deg, #4A1F6B 0%, #612C8B 50%, #8B4FBF 100%);
          isolation: isolate;
        }

        .cta-card-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          pointer-events: none;
          z-index: -1;
        }
        .cta-card-glow-one {
          top: -6rem;
          right: 8%;
          width: 22rem;
          height: 22rem;
          background: rgba(255,255,255,0.12);
        }
        .cta-card-glow-two {
          bottom: -7rem;
          left: 25%;
          width: 20rem;
          height: 20rem;
          background: rgba(30,8,58,0.45);
        }

        .cta-noise {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: 0.5;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          color: rgba(255,255,255,0.85);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 1.4rem;
        }
        .cta-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #DACAFF;
          box-shadow: 0 0 10px rgba(218,202,255,0.8);
        }

        .cta-heading {
          color: #fff;
          font-size: clamp(1.8rem, 4.4vw, 3rem);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
        }

        .cta-sub {
          color: rgba(255,255,255,0.78);
          font-size: 1.02rem;
          line-height: 1.6;
          margin-bottom: 1.6rem;
          max-width: 34rem;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          border-radius: 999px;
          color: #4A1F6B;
          font-weight: 700;
          font-size: 0.95rem;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.3);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 0.5rem;
          color: rgba(255,255,255,0.9);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .cta-secondary:hover {
          color: #fff;
        }

        .cta-art {
          position: relative;
          flex-shrink: 0;
          width: min(100%, 420px);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-art-halo {
          position: absolute;
          inset: 5%;
          border-radius: 50%;
          background: radial-gradient(closest-side, rgba(218,202,255,0.35), transparent);
          filter: blur(28px);
        }
        .cta-art-img {
          position: relative;
          width: 100%;
          height: auto;
          max-height: 320px;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.45));
        }

        .cta-float {
          position: absolute;
          animation: cta-float 6s ease-in-out infinite;
        }
        .cta-float-square {
          top: 6%;
          right: 8%;
          width: 15px;
          height: 15px;
          border-radius: 3px;
          background: rgba(255,255,255,0.55);
        }
        .cta-float-square span {
          position: absolute;
          inset: -9px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 6px;
        }
        .cta-float-circle {
          bottom: 9%;
          left: 4%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(218,202,255,0.9);
          animation-delay: 1.5s;
        }
        .cta-float-circle span {
          position: absolute;
          inset: -8px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 50%;
        }
        @keyframes cta-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 900px) {
          .cta-card {
            border-radius: 1.5rem;
          }
          .cta-art {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  )
}
