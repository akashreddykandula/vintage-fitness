import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GYM, WA_BASE } from '../data'

function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

export default function Hero() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const members = useCounter(1000, 2200, started)
  const reviews = useCounter(368, 2000, started)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0a0a0a 0%,#1a1208 50%,#0a0a0a 100%)' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.15]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Gold gradient glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,197,24,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 px-[5%] pt-28 pb-16 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-gold text-xs font-semibold tracking-widest mb-7">
              ⭐ {GYM.rating} RATING · {GYM.reviews}+ GOOGLE REVIEWS · KONDAPUR, HYDERABAD
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="font-poppins font-black leading-[0.95] tracking-[-3px] mb-6"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
          >
            TRANSFORM
            <br />
            YOUR BODY.
            <br />
            <span className="text-gold">YOUR LIFE.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={item}
            className="text-white/60 leading-relaxed max-w-xl mb-10"
            style={{ fontSize: 'clamp(15px, 1.8vw, 19px)' }}
          >
            Hyderabad's premium multi-floor fitness destination with expert certified trainers,
            world-class equipment, and proven, lasting results.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <a href="#contact" className="btn-primary text-base">
              🏋️ Book Free Trial
            </a>
            <a
              href={`${WA_BASE}?text=Hi+Vintage+Fitness+Gym,+I+want+to+book+a+free+trial+session.`}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-base"
            >
              💬 Chat on WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={ref}
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/10 pt-10"
          >
            {[
              { num: `${GYM.rating}★`, label: 'Google Rating', raw: false },
              { num: `${reviews}+`, label: 'Reviews', raw: true },
              { num: `${GYM.floors}`, label: 'Floors', raw: false },
              { num: `${members}+`, label: 'Happy Members', raw: true },
            ].map((s, i) => (
              <div
                key={i}
                className={`text-center py-2 ${i < 3 ? 'border-r border-white/10' : ''}`}
              >
                <div
                  className="font-poppins font-black text-gold"
                  style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
                >
                  {s.num}
                </div>
                <div className="text-white/40 text-xs tracking-widest mt-1 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30"
      >
        <div className="w-px h-8 bg-gold" />
        <div className="text-[10px] tracking-widest text-gold">SCROLL</div>
      </motion.div>
    </section>
  )
}
