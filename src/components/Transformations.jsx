import { motion } from 'framer-motion'
import { TRANSFORMATIONS, WA_BASE } from '../data'

export default function Transformations() {
  return (
    <section id="transformations" className="bg-gym-dark py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label">Member Results</div>
          <h2 className="section-title mb-4">Real Transformations. Real People.</h2>
          <p className="text-white/45 max-w-xl mx-auto text-[15px] leading-relaxed">
            These aren't models. These are your neighbors, colleagues, and friends who committed to change
            and backed it up with hard work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRANSFORMATIONS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gym-black border border-white/[0.06] hover:border-gold/30 rounded-2xl overflow-hidden
                         transition-all duration-300 hover:-translate-y-1"
            >
              {/* Before / After */}
              <div className="relative grid grid-cols-2 h-44">
                <div className="flex items-center justify-center text-4xl bg-[#1a1a1a] relative">
                  {t.beforeIcon}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] tracking-[2px]
                                   font-bold text-white/40 bg-black/60 px-2 py-0.5 rounded-full">
                    BEFORE
                  </span>
                </div>
                {/* Gold divider */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold z-10" />
                <div className="flex items-center justify-center text-4xl bg-[#1a1208] relative">
                  {t.afterIcon}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] tracking-[2px]
                                   font-bold text-gold bg-black/60 px-2 py-0.5 rounded-full">
                    AFTER
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="font-poppins font-bold text-[14px] mb-2">{t.name} — {t.type}</h4>
                <p className="text-white/45 text-[13px] leading-relaxed mb-3">{t.story}</p>
                <span className="inline-block bg-gold/10 text-gold rounded-full px-3 py-1 text-[11px] font-semibold">
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={`${WA_BASE}?text=Hi+Vintage+Fitness,+I+want+to+start+my+transformation+journey!`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            🚀 Start Your Transformation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
