import { motion } from 'framer-motion'
import { PROGRAMS, WA_BASE } from '../data'

export default function Programs() {
  return (
    <section id="programs" className="bg-gym-dark py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label">Training Programs</div>
          <h2 className="section-title mb-4">Find Your Program</h2>
          <p className="text-white/45 max-w-md mx-auto text-[15px] leading-relaxed">
            Every program is designed by certified coaches and tailored to your specific fitness goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-gym-black border border-white/[0.06] hover:border-gold/40 rounded-2xl p-9
                         text-center cursor-pointer group transition-colors duration-300
                         hover:shadow-[0_24px_64px_rgba(245,197,24,0.1)]"
            >
              <div className="text-5xl mb-5">{p.icon}</div>
              <h3 className="font-poppins font-bold text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-white/45 text-[13px] leading-relaxed mb-6">{p.desc}</p>
              <a
                href={`${WA_BASE}?text=${encodeURIComponent(p.waMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold/10 hover:bg-gold hover:text-gym-black
                           text-gold border border-gold/30 rounded-full px-5 py-2 text-[13px] font-semibold
                           transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                💬 Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
