import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY_ITEMS } from '../data'

const SIZES = [
  'col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1',
  'col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1',
  'col-span-1 row-span-1', 'col-span-2 row-span-1', 'col-span-1 row-span-1',
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="bg-gym-black py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-label">Our Facility</div>
          <h2 className="section-title mb-4">Step Inside Vintage Fitness</h2>
          <p className="text-white/45 max-w-md mx-auto text-[15px] leading-relaxed">
            Three floors of premium fitness infrastructure, purpose-built for every training style.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 auto-rows-[140px] gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setSelected(item)}
              className={`${SIZES[i] || 'col-span-1 row-span-1'}
                bg-gym-dark border border-white/[0.06] rounded-xl overflow-hidden
                flex items-center justify-center flex-col gap-2
                cursor-pointer group relative
                hover:border-gold/40 transition-all duration-300`}
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-[11px] text-white/40 tracking-wider font-medium group-hover:text-gold/70 transition-colors">
                {item.label}
              </span>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="lightbox-overlay"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gym-dark border border-white/10 rounded-2xl p-12 text-center max-w-sm mx-4"
              >
                <div className="text-8xl mb-6">{selected.icon}</div>
                <h3 className="font-poppins font-bold text-xl mb-2">{selected.label}</h3>
                <p className="text-white/45 text-sm mb-6 capitalize">
                  {selected.type} · Vintage Fitness Gym
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gold/60 text-sm hover:text-gold transition-colors"
                >
                  ✕ Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
