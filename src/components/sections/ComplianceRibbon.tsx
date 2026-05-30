import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const badges = [
  {
    title: 'ICO Registered',
    subtitle: "Registered with the UK Information Commissioner's Office. Your business data is handled securely and in line with UK data protection requirements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'UK GDPR',
    subtitle: 'Every client receives a signed Data Processing Agreement from day one.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L4 7v8c0 5 4.5 9.5 10 10 5.5-.5 10-5 10-10V7L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 14l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'IDTA Ready',
    subtitle: 'International data transfers handled under the UK IDTA framework.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 3c-4 2-6 6-6 11s2 9 6 11M14 3c4 2 6 6 6 11s-2 9-6 11M3 14h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'MTD Ready',
    subtitle: 'Making Tax Digital compliant',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function ComplianceRibbon() {
  return (
    <section
      className="py-12 md:py-16"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="compliance-heading"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16">
          <Reveal className="md:w-48 flex-shrink-0" delay={0.05}>
            <p id="compliance-heading" className="eyebrow mb-6">
              Compliance
              <br />
              stack
            </p>
            {/* Combined shield: ICO · GDPR · IDTA · MTD */}
            <svg width="96" height="112" viewBox="0 0 96 112" fill="none" aria-hidden="true" className="text-lime" style={{ opacity: 0.75 }}>
              {/* Outer shield */}
              <path d="M48 4L6 18v28c0 28 17 52 42 62 25-10 42-34 42-62V18L48 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              {/* Inner shield */}
              <path d="M48 16L18 26v20c0 20 12 38 30 46 18-8 30-26 30-46V26L48 16z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" strokeOpacity="0.35"/>
              {/* Quadrant dividers */}
              <line x1="48" y1="22" x2="48" y2="88" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3"/>
              <line x1="20" y1="52" x2="76" y2="52" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.3"/>
              {/* ICO — top left */}
              <text x="28" y="44" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">ICO</text>
              {/* GDPR — top right */}
              <text x="66" y="44" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">GDPR</text>
              {/* IDTA — bottom left */}
              <text x="28" y="68" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">IDTA</text>
              {/* MTD — bottom right */}
              <text x="66" y="68" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="monospace" fontWeight="600" letterSpacing="0.5" fillOpacity="0.7">MTD</text>
              {/* Centre lock */}
              <rect x="40" y="47" width="16" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
              <path d="M43 47v-3a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
              <circle cx="48" cy="53.5" r="1.5" fill="currentColor"/>
              <path d="M48 55v3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
          </Reveal>

          <Stagger className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-smoke" stagger={0.1} delay={0.1}>
            {badges.map(badge => (
              <motion.div
                key={badge.title}
                variants={item}
                className="flex flex-col gap-3 px-6 first:pl-0 last:pr-0 py-2 group"
              >
                <span className="text-pure opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {badge.icon}
                </span>
                <div>
                  <p className="font-display text-sm text-pure font-medium">
                    {badge.title}
                  </p>
                  <p className="font-body text-xs text-ash mt-1 leading-relaxed">
                    {badge.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
