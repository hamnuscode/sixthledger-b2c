import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const docIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="1" width="9" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M5 1v3h4" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M4 7h6M4 10h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
)
const gearIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 10a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
)
const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5.5 8l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const rocketIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
)

const flowSteps = [
  { icon: docIcon, label: 'Share docs' },
  { icon: gearIcon, label: 'We process' },
  { icon: checkIcon, label: 'You review' },
  { icon: rocketIcon, label: 'Filed' },
]

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

        {/* Flow diagram */}
        <div className="flex items-center gap-0 mb-12 overflow-x-auto" aria-hidden="true">
          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="w-10 h-10 border border-smoke flex items-center justify-center text-lime" style={{ background: 'var(--coal)' }}>
                  {step.icon}
                </div>
                <span className="font-mono text-[10px] text-ash uppercase tracking-widest whitespace-nowrap">{step.label}</span>
              </div>
              {i < 3 && <div className="flex-1 h-px bg-smoke mx-2 mt-[-1rem]" />}
            </div>
          ))}
        </div>

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
