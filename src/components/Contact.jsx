import { useState } from 'react'
import { motion } from 'framer-motion'
import { GYM, HOURS, FITNESS_GOALS, WA_BASE } from '../data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', goal: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (!form.name.trim()) { alert('Please enter your name.'); return }
    if (!form.goal) { alert('Please select your fitness goal.'); return }
    const msg = `Hi Vintage Fitness Gym, my name is ${form.name}. I am interested in ${form.goal}. Please share more information.`
    setSubmitted(true)
    setTimeout(() => {
      window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, '_blank')
      setSubmitted(false)
    }, 600)
  }

  const info = [
    { icon: '📍', title: 'Location', content: GYM.address },
    { icon: '📞', title: 'Phone / WhatsApp', content: GYM.phone },
    { icon: '⭐', title: 'Google Rating', content: `${GYM.rating} ★ — ${GYM.reviews}+ Verified Reviews` },
  ]

  return (
    <section id="contact" className="bg-gym-black py-24 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Your First Step Starts Here</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col gap-7 mb-8">
              {info.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-gold/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm mb-2">Opening Hours</h4>
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 text-sm text-white/50 mb-1">
                      <span>{h.day}</span>
                      <span className="text-white/70">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <a
              href={GYM.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-gym-dark border border-white/[0.07]
                         hover:border-gold/20 rounded-xl h-44 text-white/40 hover:text-white/60
                         transition-all duration-300 group"
            >
              <span className="text-3xl">🗺️</span>
              <div>
                <div className="font-semibold text-sm group-hover:text-gold transition-colors">
                  View on Google Maps
                </div>
                <div className="text-xs mt-0.5">Kondapur, Gachibowli, Hyderabad</div>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gym-dark border border-white/[0.07] rounded-2xl p-8 lg:p-10"
          >
            <h3 className="font-poppins font-bold text-xl mb-2">Book a Free Trial</h3>
            <p className="text-white/40 text-sm mb-8">
              Fill in your details and we'll reach out on WhatsApp instantly.
            </p>

            {[
              { label: 'YOUR NAME', name: 'name', type: 'text', placeholder: 'e.g. Rahul Sharma' },
              { label: 'PHONE NUMBER', name: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
            ].map((field) => (
              <div key={field.name} className="mb-5">
                <label className="block text-[12px] font-semibold text-white/50 tracking-widest mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-gold/50
                             focus:bg-gold/[0.03] rounded-xl px-4 py-3.5 text-sm text-white
                             placeholder:text-white/25 outline-none transition-all duration-300"
                />
              </div>
            ))}

            <div className="mb-7">
              <label className="block text-[12px] font-semibold text-white/50 tracking-widest mb-2">
                FITNESS GOAL
              </label>
              <select
                name="goal"
                value={form.goal}
                onChange={handleChange}
                className="w-full bg-white/[0.04] border border-white/10 focus:border-gold/50
                           rounded-xl px-4 py-3.5 text-sm text-white outline-none
                           transition-all duration-300 appearance-none"
                style={{ background: '#1a1a1a' }}
              >
                <option value="">Select your goal</option>
                {FITNESS_GOALS.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gold hover:bg-gold-dark text-gym-black font-poppins font-bold
                         py-4 rounded-full text-[15px] transition-all duration-300 hover:-translate-y-0.5
                         flex items-center justify-center gap-2"
            >
              {submitted ? '✅ Redirecting...' : '💬 Send via WhatsApp'}
            </button>

            <p className="text-center text-white/25 text-[11px] mt-4">
              We typically respond within 5 minutes during gym hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
