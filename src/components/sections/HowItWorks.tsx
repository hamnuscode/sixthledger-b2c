import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const steps = [
  {
    numeral: 'i.',
    title: 'Book a free consultation',
    body: '20 minutes. Tell us about your business. We tell you exactly what we can do and at what price. No commitment required.',
  },
  {
    numeral: 'ii.',
    title: 'We agree what you need',
    body: 'A simple engagement letter and a data processing agreement. Clear scope, clear price, clear start date. No hidden costs.',
  },
  {
    numeral: 'iii.',
    title: 'We handle the numbers',
    body: "You give us access to your accounting software or share what we need. We get on with it. You get on with your business.",
  },
  {
    numeral: 'iv.',
    title: 'You grow, we scale',
    body: 'Add services as your business grows. Monthly reporting, year-end, payroll, we expand with you at every stage.',
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
            From first contact to{' '}
            <span className="italic">running smoothly</span>
            <br />
            in less than a week.
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
