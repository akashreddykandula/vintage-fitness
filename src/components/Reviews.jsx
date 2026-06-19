import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { REVIEWS, GYM } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gym-dark py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="section-label">Google Reviews</div>
          <h2 className="section-title mb-10">What Members Say</h2>

          {/* Big rating display */}
          <div className="mb-14">
            <div
              className="font-poppins font-black text-gold leading-none"
              style={{ fontSize: 'clamp(72px, 10vw, 96px)' }}
            >
              {GYM.rating}
            </div>
            <div className="text-3xl tracking-[6px] my-3 text-gold">★★★★★</div>
            <div className="text-white/40 text-sm">
              Based on {GYM.reviews}+ verified Google Reviews
            </div>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-gym-black border border-white/[0.07] rounded-2xl p-6"
            >
              <div className="text-gold text-sm tracking-[3px] mb-3">★★★★★</div>
              <p className="text-white/60 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-gym-black font-bold text-xs">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-white/35 text-xs">{r.time}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="pb-10"
          >
            {REVIEWS.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="bg-gym-black border border-white/[0.07] rounded-2xl p-6">
                  <div className="text-gold text-sm tracking-[3px] mb-3">★★★★★</div>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-gym-black font-bold text-xs">
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{r.name}</div>
                      <div className="text-white/35 text-xs">{r.time}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
