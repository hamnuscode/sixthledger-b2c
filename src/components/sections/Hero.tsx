import { motion } from 'framer-motion'
import Button from '../ui/Button'
import VSLPlayer from './VSLPlayer'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
      aria-labelledby="hero-headline"
    >
      {/* Radial lime glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(200,232,74,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            <motion.p
              className="eyebrow mb-5"
              aria-hidden="true"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            >
             , For UK small businesses
            </motion.p>

            <motion.h1
              id="hero-headline"
              className="font-display text-5xl sm:text-6xl lg:text-7xl leading-tight text-pure mb-6"
              style={{ letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              Your books,{' '}
              <span className="italic text-pure">sorted.</span>
              <br />
              Your numbers,{' '}
              <span className="italic text-pure">explained.</span>
            </motion.h1>

            <motion.p
              className="font-body text-bone text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.28 }}
            >
              Professional accounting and bookkeeping for UK sole traders, freelancers, and
              small businesses. ACCA-led, ICO-registered, MTD-ready, at a price that
              makes sense.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            >
              <Button to="/contact" size="lg">
                Book a free consultation
              </Button>
              <Button to="/pricing" variant="ghost" size="lg">
                See pricing
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-x-4 gap-y-1"
              aria-label="Compliance credentials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.56 }}
            >
              {['ICO Registered', 'ACCA-Led', 'UK GDPR Compliant', 'MTD-Ready'].map(
                (item, i) => (
                  <span key={item} className="flex items-center gap-4">
                    {i > 0 && (
                      <span className="text-smoke text-xs" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <span className="font-mono text-xs text-ash uppercase tracking-label">
                      {item}
                    </span>
                  </span>
                )
              )}
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
      </div>
    </section>
  )
}
