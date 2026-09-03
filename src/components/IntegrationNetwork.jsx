import { forwardRef, useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 4.5,
  delay = 0,
  pathColor = 'rgba(255,255,255,0.16)',
  pathWidth = 2,
  pathOpacity = 1,
  gradientStartColor = '#ff9d3d',
  gradientStopColor = '#8b5cff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) {
  const rawId = useId()
  const gradientId = rawId.replace(/:/g, '')

  const [path, setPath] = useState('')
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current
      const from = fromRef.current
      const to = toRef.current

      if (!container || !from || !to) return

      const containerRect = container.getBoundingClientRect()
      const fromRect = from.getBoundingClientRect()
      const toRect = to.getBoundingClientRect()

      const width = containerRect.width
      const height = containerRect.height

      const startX =
        fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset
      const startY =
        fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset

      const endX =
        toRect.left - containerRect.left + toRect.width / 2 + endXOffset
      const endY =
        toRect.top - containerRect.top + toRect.height / 2 + endYOffset

      const controlX = (startX + endX) / 2
      const controlY = startY - curvature

      setDimensions({ width, height })
      setPath(`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`)
    }

    const observer = new ResizeObserver(updatePath)

    const elements = [containerRef.current, fromRef.current, toRef.current]
    elements.forEach((element) => {
      if (element) observer.observe(element)
    })

    updatePath()
    window.addEventListener('resize', updatePath)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updatePath)
    }
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset])

  const animationCoordinates = reverse
    ? { x1: ['110%', '-20%'], x2: ['120%', '-10%'] }
    : { x1: ['-20%', '110%'], x2: ['-10%', '120%'] }

  return (
    <svg
      aria-hidden="true"
      className="kb-beam"
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      fill="none"
    >
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth + 0.7}
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          initial={{ x1: '0%', x2: '0%', y1: '0%', y2: '0%' }}
          animate={{
            x1: animationCoordinates.x1,
            x2: animationCoordinates.x2,
            y1: ['0%', '0%'],
            y2: ['0%', '0%'],
          }}
          transition={{ delay, duration, ease: 'linear', repeat: Infinity }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="28%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="55%" stopColor={gradientStopColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  )
}

const IntegrationNode = forwardRef(function IntegrationNode({ img, icon, name, large = false }, ref) {
  return (
    <div className="kb-node-wrap">
      <motion.div
        ref={ref}
        className={`kb-node ${large ? 'kb-node-large' : ''}`}
        whileHover={{ scale: 1.09, y: -4 }}
        transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      >
        <span className="kb-node-shine" />
        <div className="kb-icon">
          {img ? (
            <img src={img} alt={name} className="kb-node-img" />
          ) : (
            icon
          )}
        </div>
      </motion.div>

      <span className="kb-node-name">{name}</span>
    </div>
  )
})

export default function IntegrationNetwork() {
  const containerRef = useRef(null)

  const slackRef = useRef(null)
  const meetRef = useRef(null)
  const whatsappRef = useRef(null)

  const centerRef = useRef(null)

  const firebaseRef = useRef(null)
  const cloudflareRef = useRef(null)
  const githubRef = useRef(null)

  return (
    <>
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[520px] h-[520px] rounded-full bg-[#8B4FBF]/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[520px] h-[520px] rounded-full bg-[#4C2A8A]/20 blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="kb-card">
            <div className="kb-orb" />

            <header className="kb-header">
              <div className="kb-eyebrow">
                <span className="kb-dot" />
                Live integrations
              </div>

              <h2 className="kb-title">
                Your entire digital presence, <span>working as one.</span>
              </h2>

              <p className="kb-description">
                From your website to analytics and marketing platforms, Maven keeps every tool connected, synchronized, and driving toward one goal — your growth.
              </p>
            </header>

            <div ref={containerRef} className="kb-network">
              <div className="kb-column kb-left">
                <IntegrationNode ref={slackRef} img="/images/slack.png" name="Slack" />
                <IntegrationNode ref={meetRef} img="/images/google-meet.png" name="Meet" />
                <IntegrationNode ref={whatsappRef} img="/images/whatsapp.png" name="WhatsApp" />
              </div>

              <div className="kb-center">
                <IntegrationNode ref={centerRef} img="/images/maven.png" name="Maven" large />
              </div>

              <div className="kb-column kb-right">
                <IntegrationNode ref={firebaseRef} img="/images/firebase.png" name="Firebase" />
                <IntegrationNode ref={cloudflareRef} img="/images/cloudflare.png" name="Cloudflare" />
                <IntegrationNode ref={githubRef} img="/images/github.png" name="GitHub" />
              </div>

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={slackRef}
                toRef={centerRef}
                curvature={-88}
                endYOffset={-8}
                duration={4.8}
                delay={0}
                gradientStartColor="#36c5f0"
                gradientStopColor="#c05cff"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={meetRef}
                toRef={centerRef}
                duration={4}
                delay={0.3}
                gradientStartColor="#4aa8ff"
                gradientStopColor="#0F9D58"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={whatsappRef}
                toRef={centerRef}
                curvature={88}
                endYOffset={8}
                duration={5.2}
                delay={0.7}
                gradientStartColor="#3ee18e"
                gradientStopColor="#8868ff"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={firebaseRef}
                toRef={centerRef}
                curvature={-88}
                endYOffset={-8}
                reverse
                duration={5}
                delay={0.2}
                gradientStartColor="#F7820C"
                gradientStopColor="#a45cff"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={cloudflareRef}
                toRef={centerRef}
                reverse
                duration={4.2}
                delay={0.5}
                gradientStartColor="#FAAE40"
                gradientStopColor="#bd5cff"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={githubRef}
                toRef={centerRef}
                curvature={88}
                endYOffset={8}
                reverse
                duration={5.4}
                delay={0.9}
                gradientStartColor="#8892b0"
                gradientStopColor="#5d83ff"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .kb-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
          background:
            linear-gradient(145deg, rgba(255,255,255,0.025), rgba(255,255,255,0.005)),
            #0b0b12;
        }

        .kb-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.34;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .kb-orb {
          position: absolute;
          width: min(44vw, 440px);
          aspect-ratio: 1;
          left: 50%;
          top: 56%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(18px);
          background: radial-gradient(
            circle,
            rgba(139,79,191,0.22),
            rgba(139,79,191,0.05) 43%,
            transparent 72%
          );
          animation: kb-pulse 4.8s ease-in-out infinite;
        }

        .kb-header {
          position: relative;
          z-index: 5;
          width: min(680px, calc(100% - 40px));
          margin: 0 auto;
          padding-top: clamp(26px, 4.2vh, 48px);
          text-align: center;
        }

        .kb-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          color: rgba(255,255,255,0.65);
          background: rgba(255,255,255,0.04);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .kb-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #9b6cff;
          box-shadow: 0 0 14px #9b6cff;
        }

        .kb-title {
          margin: clamp(10px, 1.6vh, 18px) 0 8px;
          font-size: clamp(29px, 4.4vw, 52px);
          line-height: 1.01;
          font-weight: 900;
        }

        .kb-title span {
          color: transparent;
          background: linear-gradient(90deg, #ffffff, #d6c9ff 50%, #b98af0);
          background-clip: text;
          -webkit-background-clip: text;
        }

        .kb-description {
          max-width: 520px;
          margin: 0 auto;
          color: rgba(255,255,255,0.5);
          font-size: clamp(12px, 1.2vw, 15px);
          line-height: 1.6;
        }

        .kb-network {
          position: relative;
          z-index: 3;
          width: min(900px, calc(100% - 50px));
          height: clamp(280px, 46vh, 420px);
          margin: clamp(6px, 1.2vh, 16px) auto 0;
          display: grid;
          grid-template-columns: 1fr 1.05fr 1fr;
          align-items: center;
        }

        .kb-column {
          position: relative;
          z-index: 4;
          height: clamp(240px, 38vh, 330px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .kb-left {
          align-items: flex-start;
        }

        .kb-right {
          align-items: flex-end;
        }

        .kb-center {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kb-node-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .kb-node {
          position: relative;
          width: clamp(50px, 5vw, 66px);
          height: clamp(50px, 5vw, 66px);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: clamp(16px, 1.7vw, 21px);
          background:
            linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.035)), #101016;
          box-shadow:
            0 16px 35px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.13);
          cursor: pointer;
          transform: translateZ(0);
        }

        .kb-node-large {
          width: clamp(76px, 7.5vw, 100px);
          height: clamp(76px, 7.5vw, 100px);
          border-radius: clamp(23px, 2.3vw, 30px);
          box-shadow:
            0 24px 65px rgba(100,66,255,0.3),
            0 0 0 8px rgba(123,87,255,0.045),
            inset 0 1px 0 rgba(255,255,255,0.18);
        }

        .kb-node-shine {
          position: absolute;
          width: 90%;
          height: 45%;
          left: 5%;
          top: -18%;
          border-radius: 50%;
          opacity: 0.7;
          filter: blur(13px);
          background: rgba(255,255,255,0.18);
        }

        .kb-icon {
          position: relative;
          z-index: 2;
          width: 90%;
          height: 90%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .kb-node-large .kb-icon {
          width: 72%;
          height: 72%;
        }

        .kb-node-large .kb-node-img {
          filter: none;
          object-fit: contain;
        }

        .kb-icon svg {
          display: block;
          width: 100%;
          height: 100%;
        }

        .kb-node-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .kb-node-name {
          color: rgba(255,255,255,0.43);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .kb-node-wrap:hover .kb-node-name {
          color: rgba(255,255,255,0.85);
          transform: translateY(2px);
        }

        .kb-beam {
          position: absolute;
          z-index: 1;
          inset: 0;
          overflow: visible;
          pointer-events: none;
          filter: drop-shadow(0 0 5px rgba(146,93,255,0.35));
        }

        @keyframes kb-pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(0.95); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.08); }
        }

        @media (max-width: 720px) {
          .kb-header { padding-top: clamp(20px, 3vh, 30px); }
          .kb-title { font-size: clamp(29px, 8vw, 40px); }
          .kb-description { max-width: 410px; padding: 0 8px; }
          .kb-network {
            width: calc(100% - 28px);
            height: clamp(265px, 46vh, 360px);
            grid-template-columns: 1fr 0.85fr 1fr;
          }
          .kb-column { height: clamp(215px, 36vh, 290px); }
          .kb-node-name { display: none; }
        }
      `}</style>
    </>
  )
}
