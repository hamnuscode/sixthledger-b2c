import { motion } from 'framer-motion'

const items = [
  {
    label: 'ACCA Qualified',
    mark: (
      <svg width="36" height="20" viewBox="0 0 36 20" fill="none" aria-hidden="true">
        <rect x="0.6" y="0.6" width="34.8" height="18.8" rx="2.4" stroke="currentColor" strokeWidth="1.1"/>
        <text x="18" y="14" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="1.5">ACCA</text>
      </svg>
    ),
  },
  {
    label: 'QuickBooks',
    mark: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="0.6" y="0.6" width="18.8" height="18.8" rx="3" stroke="currentColor" strokeWidth="1.1"/>
        <circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M9 6v8M13 9h2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Xero',
    mark: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Sage',
    mark: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M13.5 7.5a4 4 0 100 5M13.5 12.5a4 4 0 01-4 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'HMRC',
    mark: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        {/* Crown */}
        <path d="M3 14h14M4 14V9l3 3 3-5 3 5 3-3v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="8.5" r="1" fill="currentColor"/>
        <circle cx="10" cy="4.5" r="1" fill="currentColor"/>
        <circle cx="16" cy="8.5" r="1" fill="currentColor"/>
        <path d="M3 16h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'ICO Registered',
    mark: (
      <svg width="36" height="20" viewBox="0 0 36 20" fill="none" aria-hidden="true">
        <rect x="0.6" y="0.6" width="34.8" height="18.8" rx="2.4" stroke="currentColor" strokeWidth="1.1"/>
        <text x="18" y="14" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="1.5">ICO</text>
      </svg>
    ),
  },
  {
    label: 'UK GDPR',
    mark: (
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none" aria-hidden="true">
        <path d="M9 1L1 4.5v7c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10v-7L9 1z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
        <path d="M5.5 11l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function TrustStrip() {
  return (
    <div
      className="border-b border-smoke"
      style={{ background: 'var(--coal)' }}
      aria-label="Works with and compliance badges"
    >
      <div className="container">
        <motion.div
          className="py-4 overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex items-center gap-0 min-w-max divide-x divide-smoke">
            <span className="font-mono text-[10px] uppercase tracking-widest pr-6 flex-shrink-0" style={{ color: 'rgba(107,107,107,0.55)' }}>
              Works with
            </span>
            {items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 px-6"
                style={{ color: 'rgba(107,107,107,0.65)' }}
                title={item.label}
              >
                {item.mark}
                <span className="font-mono text-[9px] uppercase tracking-widest whitespace-nowrap" style={{ color: 'rgba(107,107,107,0.45)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
