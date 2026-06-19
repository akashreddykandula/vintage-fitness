import { motion } from 'framer-motion'
import { TRAINERS, WA_BASE } from '../data'

export default function Trainers() {
  return (
    <section id="trainers" className="bg-gym-black py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label">Expert Coaches</div>
          <h2 className="section-title mb-4">Meet Your Trainers</h2>
          <p className="text-white/45 max-w-md mx-auto text-[15px] leading-relaxed">
            Certified, experienced, and genuinely invested in your transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {TRAINERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.25 } }}
              className="bg-gym-dark border border-white/[0.07] hover:border-gold/40 rounded-2xl overflow-hidden
                         text-center pb-6 group transition-all duration-300
                         hover:shadow-[0_20px_60px_rgba(245,197,24,0.1)]"
            >
              {/* Avatar */}
              <div
                className="w-full flex items-center justify-center text-5xl"
                style={{
                  paddingTop: '100%',
                  position: 'relative',
                  background: 'linear-gradient(135deg,#2a2208 0%,#1a1408 100%)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                  }}
                >
                  {t.icon}
                </span>
              </div>

              <h3 className="font-poppins font-bold text-[15px] mt-4 mx-3 mb-1 group-hover:text-gold transition-colors">
                {t.name}
              </h3>
              <div className="text-gold text-[12px] font-semibold tracking-wide mx-3 mb-1">{t.role}</div>
              <div className="text-white/40 text-[12px] mx-3 mb-1">{t.exp} Experience</div>
              <div className="text-white/35 text-[11px] mx-3 mb-4 leading-relaxed">{t.specialization}</div>

              <a
                href={`${WA_BASE}?text=${encodeURIComponent(
                  `Hi, I'd like to train with ${t.name} at Vintage Fitness.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gold/10 hover:bg-gold hover:text-gym-black
                           text-gold border border-gold/25 rounded-full px-4 py-1.5 text-[12px] font-semibold
                           transition-all duration-300"
              >
                💬 Connect
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
