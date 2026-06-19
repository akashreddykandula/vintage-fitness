import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WA_DEFAULT } from '../data'

export default function WhatsAppFAB() {
  const [tooltip, setTooltip] = useState(true)

  return (
    <div className="fixed bottom-7 right-7 z-[998] flex flex-col items-end gap-3">
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-gym-dark border border-white/10 text-white text-xs font-medium
                       px-4 py-2 rounded-xl shadow-xl whitespace-nowrap"
          >
            Chat with us! 👋
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        className="wa-fab-pulse w-14 h-14 rounded-full flex items-center justify-center
                   text-white text-3xl bg-[#25D366] transition-all duration-300
                   hover:scale-110 shadow-[0_8px_32px_rgba(37,211,102,0.4)]"
      >
        💬
      </a>
    </div>
  )
}
