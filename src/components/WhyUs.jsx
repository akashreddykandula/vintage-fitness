import { motion } from 'framer-motion'
import { FEATURES } from '../data'

export default function WhyUs() {
  return (
    <section id="why" className="bg-gym-black py-24 px-[5%]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Why Vintage Fitness</div>
          <h2 className="section-title mb-4">Everything You Need.<br />Nothing You Don't.</h2>
          <p className="text-white/45 max-w-lg mx-auto mb-14 text-[15px] leading-relaxed">
            Six pillars that make Vintage Fitness the premium choice for serious members across Hyderabad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="card-glass p-8 text-left group cursor-default"
            >
              <div className="w-13 h-13 bg-gold/10 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="font-poppins font-bold text-[17px] mb-3 group-hover:text-gold transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
