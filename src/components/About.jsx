import { motion } from 'framer-motion'
import { WA_BASE } from '../data'

const pills = [
  'Certified Trainers', 'Custom Diet Plans', 'Free Parking',
  'Free Wi-Fi', 'LGBTQ+ Friendly', 'AC Floors', 'Clean Facility', '3 Floors'
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function About() {
  return (
    <section id="about" className="bg-gym-dark py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image col */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden flex items-center justify-center text-[90px]"
              style={{
                background: 'linear-gradient(135deg,#1a1208 0%,#2a2010 50%,#1a1a1a 100%)',
                aspectRatio: '4/5',
              }}
            >
              🏋️
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-gold text-gym-black rounded-xl px-5 py-4">
                <span className="font-poppins font-black text-3xl block leading-none">5+</span>
                <span className="font-bold text-[11px] tracking-widest uppercase">Years of Excellence</span>
              </div>
            </div>

            {/* Accent line */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text col */}
          <div>
            <motion.div variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="section-label">Our Story</div>
              <h2 className="section-title mb-6">
                Built for People Who Are Serious About Results
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-white/55 text-[15px] leading-[1.85] mb-5">
              Vintage Fitness Gym was born from a simple belief: every person deserves access to a
              world-class fitness environment without compromise. Located in the heart of Kondapur,
              Gachibowli — Hyderabad's tech corridor — we serve professionals, students, and families
              who want real, lasting transformation.
            </motion.p>

            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-white/55 text-[15px] leading-[1.85] mb-8">
              Our multi-floor facility, certified trainers, and personalized approach have earned us{' '}
              <span className="text-gold font-semibold">368+ five-star reviews</span> and made us
              the go-to gym in Hyderabad for people who are ready to commit to change.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-8">
              {pills.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-lg px-3 py-2 text-[13px] text-white/75"
                >
                  <span className="text-gold font-bold">✓</span> {p}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <a
                href={`${WA_BASE}?text=Hi+Vintage+Fitness+Gym,+I+want+to+know+more+about+membership.`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Enquire Now →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
