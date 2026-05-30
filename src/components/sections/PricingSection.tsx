import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { Reveal, Stagger, itemScale } from '../ui/Reveal'

interface PricingTier {
  name: string
  eyebrow: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  recommended?: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Sole Trader',
    eyebrow: '01, Starter',
    price: 'From £149',
    period: 'per month',
    description: 'Everything a sole trader or freelancer needs to stay compliant and tax efficient, handled for a flat monthly fee.',
    features: [
      'Monthly bookkeeping',
      'Self-assessment tax return',
      'HMRC correspondence management',
      'Quarterly financial summary',
      'Email support (2-day response)',
      'Xero or QuickBooks access',
    ],
    cta: 'Book a free consultation',
  },
  {
    name: 'Small Business',
    eyebrow: '02, Most popular',
    price: 'From £349',
    period: 'per month',
    description: 'The full accounting function for a limited company, from monthly bookkeeping to corporation tax, for one fixed monthly fee.',
    features: [
      'Everything in Sole Trader',
      'Payroll (up to 5 employees)',
      'Quarterly VAT returns (MTD)',
      'Year-end accounts preparation',
      'Corporation tax return',
      'Monthly management accounts',
      'Priority email support',
      'Quarterly video review call',
    ],
    cta: 'Book a free consultation',
    recommended: true,
  },
  {
    name: 'Growing Business',
    eyebrow: '03, Full service',
    price: 'Custom',
    period: 'monthly retainer',
    description: 'For growing businesses with complex needs, multi employee payroll, CIS, strategic reporting, and a dedicated accountant who knows your numbers.',
    features: [
      'Everything in Small Business',
      'Payroll (unlimited employees)',
      'CIS contractor returns',
      'Company secretarial',
      'Management accounts with KPI pack',
      'Annual budget and forecast',
      'Dedicated account manager',
      'Monthly strategy call',
    ],
    cta: 'Talk to us',
  },
]

export default function PricingSection() {
  return (
    <section
      className="section bg-obsidian"
      aria-labelledby="pricing-heading"
      id="pricing"
    >
      <div className="container">
        <Reveal className="max-w-2xl mb-12" delay={0.05}>
          <p className="eyebrow mb-4">Pricing</p>
          <h2
            id="pricing-heading"
            className="font-display text-3xl md:text-4xl text-pure mb-4"
          >
            Fixed fees. No{' '}
            <span className="italic">surprises.</span>
          </h2>
          <p className="font-body text-bone text-sm leading-relaxed">
            Every package is a fixed monthly fee. No hourly rates. No surprise invoices. No year end bill shock. Book a free call and we'll confirm your exact price within 24 hours.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemScale}
              className={`relative flex flex-col rounded-sm border transition-all duration-300 hover:-translate-y-1 ${
                tier.recommended
                  ? 'border-lime shadow-lime hover:shadow-[0_0_60px_rgba(200,232,74,0.22)]'
                  : 'border-smoke hover:border-smoke/60 hover:shadow-lg'
              }`}
              style={{ background: 'var(--coal)' }}
            >
              {tier.recommended && (
                <div className="absolute -top-px left-0 right-0 h-px bg-lime" aria-hidden="true" />
              )}
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-xs bg-lime text-obsidian px-3 py-0.5 uppercase tracking-label rounded-full">
                    Recommended
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col gap-5">
                <div>
                  <p className="eyebrow text-ash mb-2">{tier.eyebrow}</p>
                  <h3 className="font-display text-xl text-pure">{tier.name}</h3>
                  <p className="font-body text-xs text-bone leading-relaxed mt-2">
                    {tier.description}
                  </p>
                </div>

                <div className="border-t border-smoke pt-5">
                  <span className="font-display text-3xl text-pure" style={{ letterSpacing: '-0.02em' }}>
                    {tier.price}
                  </span>
                  <span className="font-mono text-xs text-ash ml-2 uppercase tracking-label">
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-2.5 flex-1">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="flex-shrink-0 mt-0.5 text-lime"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 7l3.5 3.5L12 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-body text-xs text-bone leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-smoke">
                  <Button
                    to="/contact"
                    variant={tier.recommended ? 'primary' : 'ghost'}
                    size="md"
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.2} type="fade">
          <p className="font-mono text-xs text-ash text-center mt-8 uppercase tracking-label">
            Prices shown are starting points. Your exact fee is confirmed during consultation. All packages include a signed Data Processing Agreement.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
