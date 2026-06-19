import { GYM, NAV_LINKS, PROGRAMS, WA_DEFAULT } from '../data'

const SOCIALS = [
  { icon: '📘', label: 'Facebook', href: '#' },
  { icon: '📸', label: 'Instagram', href: '#' },
  { icon: '💬', label: 'WhatsApp', href: WA_DEFAULT },
  { icon: '📍', label: 'Maps', href: GYM.mapsUrl },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.07] pt-16 pb-8 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="font-poppins font-black text-xl mb-4">
              VINTAGE <span className="text-gold">FITNESS</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-[260px] mb-6">
              Hyderabad's premium multi-floor fitness destination. Certified trainers,
              world-class equipment, proven results.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] hover:border-gold/30
                             hover:bg-gold/10 rounded-lg flex items-center justify-center text-base
                             transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-poppins font-bold text-[12px] tracking-[2px] text-white/50 uppercase mb-5">
              Quick Links
            </h4>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm text-white/40 hover:text-gold mb-2.5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-poppins font-bold text-[12px] tracking-[2px] text-white/50 uppercase mb-5">
              Programs
            </h4>
            {PROGRAMS.map((p) => (
              <a
                key={p.title}
                href="#programs"
                className="block text-sm text-white/40 hover:text-gold mb-2.5 transition-colors"
              >
                {p.title}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-[12px] tracking-[2px] text-white/50 uppercase mb-5">
              Contact
            </h4>
            <a href={`tel:${GYM.phone.replace(/\s/g, '')}`}
              className="block text-sm text-white/40 hover:text-gold mb-2.5 transition-colors">
              {GYM.phone}
            </a>
            <a href={WA_DEFAULT} target="_blank" rel="noreferrer"
              className="block text-sm text-white/40 hover:text-gold mb-2.5 transition-colors">
              WhatsApp Us
            </a>
            <a href={GYM.mapsUrl} target="_blank" rel="noreferrer"
              className="block text-sm text-white/40 hover:text-gold mb-6 transition-colors">
              Find on Google Maps
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Join on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between
                        items-center gap-3 text-center">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Vintage Fitness Gym. All rights reserved. Kondapur, Hyderabad.
          </p>
          <p className="text-white/20 text-xs">
            {GYM.rating} ⭐ · {GYM.reviews}+ Reviews · Premium Multi-Floor Gym
          </p>
        </div>
      </div>
    </footer>
  )
}
