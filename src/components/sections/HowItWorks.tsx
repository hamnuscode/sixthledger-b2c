import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const steps = [
  {
    numeral: 'i.',
    title: 'Free 20 minute call',
    body: 'You tell us about your business. We tell you exactly what we would do and what it costs. No obligation and no sales pitch.',
  },
  {
    numeral: 'ii.',
    title: 'Engagement letter and DPA',
    body: 'We send an engagement letter and a Data Processing Agreement in plain English. Scope, price, and start date are confirmed in writing before we begin.',
  },
  {
    numeral: 'iii.',
    title: 'Share access',
    body: 'You share access to your accounting software or send us what we need. We take it from there.',
  },
  {
    numeral: 'iv.',
    title: 'Scale as you grow',
    body: 'As your business grows, your service package grows with it. Add payroll, VAT, management accounts, or year end services at any time.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="section"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="process-heading"
      id="how-we-work"
    >
      <div className="container">
        <Reveal className="max-w-2xl mb-12" delay={0.05}>
          <p className="eyebrow mb-4">How we onboard</p>
          <h2
            id="process-heading"
            className="font-display text-3xl md:text-4xl text-pure"
          >
            From first call to fully onboarded{' '}
            <span className="italic">in under a week.</span>
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
          {steps.map((step, i) => (
            <motion.div
              key={step.numeral}
              variants={item}
              className="relative flex flex-col gap-4 group"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-6 left-full z-0 h-px"
                  style={{
                    background: 'var(--smoke)',
                    width: 'calc(100% - 1rem)',
                    transform: 'translateX(0.5rem)',
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Top accent rule */}
              <div className="relative w-12 h-0.5 bg-smoke overflow-hidden">
                <div
                  className="absolute left-0 top-0 w-3 h-0.5 bg-lime transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="font-display text-lg text-ash italic group-hover:text-lime transition-colors duration-200"
                  aria-hidden="true"
                >
                  {step.numeral}
                </span>
                <h3 className="font-body text-sm font-semibold text-pure uppercase tracking-wide">
                  {step.title}
                </h3>
              </div>

              <p className="font-body text-sm text-bone leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
