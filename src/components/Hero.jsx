import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { brand } from '../data/content'
import { useInView } from '../hooks/useAnimations'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero({ onNavigate }) {
  const [ref, inView] = useInView()
  const vantaRef = useRef(null)

  useEffect(() => {
    if (!vantaRef.current || typeof window === 'undefined' || !window.VANTA) return
    const vanta = window.VANTA.HALO({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 400.0,
      minWidth: 200.0,
      baseColor: 0x784cb9,
      backgroundColor: 0x0,
      amplitudeFactor: 1.50,
      size: 3.00
    })
    return () => {
      if (vanta && vanta.destroy) vanta.destroy()
    }
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Vanta Clouds background */}
      <div ref={vantaRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/70 via-[#0A0A0F]/55 to-[#0A0A0F]/90" style={{ backdropFilter: 'blur(50px)' }} />
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#612C8B]/15 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B4FBF]/10 blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#612C8B]/8 blur-[80px] animate-float" style={{ animationDelay: '-6s' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.h1
          variants={item}
          className="font-black leading-[1.05] tracking-tight mb-6 text-[clamp(2rem,8vw,3.4rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)]"
        >
          <span className="inline-block px-4 py-1 rounded-xl border border-[#612C8B]/30 bg-[#612C8B]/10 text-[#DACAFF] text-sm sm:text-base md:text-lg font-bold tracking-tight mb-4">
            {brand.tagline}
          </span>
          <br />
          <span className="text-white">We Build Websites </span>
          <span className="bg-gradient-to-r from-[#E9DDFF] via-[#B98AF0] to-[#8B4FBF] bg-clip-text text-transparent">
            With A Purpose
          </span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          We are a Chicago-based company, with clients all over the United States & world. Your vision mixed with our creative skills will always drive the best results.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            onClick={() => onNavigate('/contact')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#612C8B] to-[#8B4FBF] rounded-full font-semibold text-white hover:shadow-[0_8px_40px_rgba(97,44,139,0.5)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            onClick={() => onNavigate('/portfolio')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            View Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest"
      >
        <span>SCROLL</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
