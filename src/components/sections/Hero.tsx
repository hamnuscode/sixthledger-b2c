import { motion } from 'framer-motion'
import Button from '../ui/Button'
import VSLPlayer from './VSLPlayer'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      className="relative pt-28 pb-16 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
      aria-labelledby="hero-headline"
    >
      {/* Radial lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(200,232,74,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 w-full">
        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-16">
          {/* Left: copy */}
          <div className="max-w-xl">
            <motion.p
              className="eyebrow mb-5"
              aria-hidden="true"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            >
              For UK sole traders & small businesses
            </motion.p>

            <motion.h1
              id="hero-headline"
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight text-pure mb-6"
              style={{ letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              Your accounts handled.{' '}
              <span className="italic text-pure">Your numbers clear.</span>
              <br />
              Your time{' '}
              <span className="italic text-pure">back.</span>
            </motion.h1>

            <motion.p
              className="font-body text-bone text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.28 }}
            >
              Fully remote accounting for UK sole traders, freelancers, and limited companies.
              ACCA qualified. ICO registered. MTD compliant. Fixed fees. No office visits,
              no surprises.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            >
              <Button to="/contact" size="lg">
                Book a free 20 minute call
              </Button>
              <Button to="/pricing" variant="ghost" size="lg">
                See fixed fee pricing
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-4 gap-y-1"
              aria-label="Compliance credentials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.56 }}
            >
              {['ACCA Qualified', 'ICO Registered', 'UK GDPR Compliant', 'IDTA Ready', 'MTD Ready'].map(
                (badge, i) => (
                  <span key={badge} className="flex items-center gap-4">
                    {i > 0 && (
                      <span className="text-smoke text-xs" aria-hidden="true">·</span>
                    )}
                    <span className="font-mono text-xs text-ash uppercase tracking-label">
                      {badge}
                    </span>
                  </span>
                )
              )}
            </motion.div>

            {/* Workflow visual */}
            <motion.div
              className="mt-6 pt-6 border-t border-smoke"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              aria-hidden="true"
            >
              <div className="flex items-center">
                {/* Step 1: Receive */}
                <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                  <span className="text-lime">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="1" width="9" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M5 1v3h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M4 7h6M4 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </span>
                  <span className="font-mono text-[10px] text-ash uppercase tracking-widest">Receive</span>
                </div>
                {/* Connector */}
                <div className="flex-1 h-px bg-smoke mx-3" />
                {/* Step 2: Process */}
                <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                  <span className="text-lime">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 10a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </span>
                  <span className="font-mono text-[10px] text-ash uppercase tracking-widest">Process</span>
                </div>
                {/* Connector */}
                <div className="flex-1 h-px bg-smoke mx-3" />
                {/* Step 3: Deliver */}
                <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                  <span className="text-lime">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/><path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="font-mono text-[10px] text-ash uppercase tracking-widest">Deliver</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: VSL player */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.22 }}
          >
            <VSLPlayer />
          </motion.div>
        </div>

        {/* Calendly booking strip ,  inside hero, full width */}
        <motion.div
          className="border-t border-smoke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8">
            <div>
              <p className="eyebrow mb-1">Free consultation</p>
              <p className="font-display text-xl text-pure">
                Book a free 20 minute call. We'll tell you exactly what you need and what it costs. No obligation.
              </p>
            </div>
            <a
              href="https://calendly.com/sixthledger"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-lime text-obsidian font-body font-semibold text-sm px-7 py-3.5 rounded-sm hover:bg-lime-soft active:scale-[0.98] transition-all duration-150"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Book on Calendly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
