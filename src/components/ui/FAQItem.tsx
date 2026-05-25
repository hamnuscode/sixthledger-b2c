import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-smoke">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:text-lime group"
        aria-expanded={open}
      >
        <span
          className={`font-body font-medium text-base transition-colors duration-200 ${
            open ? 'text-lime' : 'text-pure group-hover:text-lime'
          }`}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 mt-0.5 text-lime"
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-bone text-sm leading-relaxed pr-8 pb-5">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
