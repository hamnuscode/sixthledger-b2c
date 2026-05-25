import { Link } from 'react-router-dom'
import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'
import Button from '../components/ui/Button'

const addOns = [
  { name: 'Additional payroll employees', price: 'From £15/employee/month' },
  { name: 'CIS monthly returns', price: 'From £75/month' },
  { name: 'Company secretarial', price: 'From £50/month' },
  { name: 'Quarterly review call', price: 'Included from Small Business' },
  { name: 'Budget and forecast', price: 'From £299/year' },
  { name: 'Catch-up bookkeeping', price: 'Quoted on request' },
]

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Pricing</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Pricing</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Clear prices. No{' '}
            <span className="italic">surprises.</span>
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            Fixed-fee monthly retainers for all core services. You know exactly what you pay
            every month. No hourly rates, no unexpected extras.
          </p>
        </div>
      </section>

      {/* Pricing section */}
      <PricingSection />

      {/* Add-ons */}
      <section className="section bg-coal border-t border-smoke">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-3">Add-ons</p>
            <h2 className="font-display text-3xl text-pure mb-3">
              Individual services
            </h2>
            <p className="font-body text-bone text-sm leading-relaxed">
              Need just one service, or want to add something to your existing package?
              All services are available individually or as additions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-smoke">
            {addOns.map(addon => (
              <div key={addon.name} className="bg-coal p-6 flex flex-col gap-2">
                <h3 className="font-body text-sm text-pure font-medium">{addon.name}</h3>
                <p className="font-mono text-xs text-lime uppercase tracking-label">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How pricing works */}
      <section className="section bg-obsidian border-t border-smoke">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="font-display text-3xl text-pure mb-5">
                How our pricing{' '}
                <span className="italic">works</span>
              </h2>
              <div className="space-y-5">
                {[
                  { step: '01', text: 'You book a free consultation. We discuss your situation — business type, transaction volume, current software.' },
                  { step: '02', text: 'We send you a fixed-fee proposal within 24 hours. The price reflects exactly what you need — not a padded package.' },
                  { step: '03', text: 'You accept (or we adjust until it\'s right). We sign the engagement letter and data processing agreement.' },
                  { step: '04', text: 'Monthly direct debit or invoice. Fixed price every month. If your scope changes, we update the agreement — no surprise bills.' },
                ].map(item => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-lime tracking-label flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <p className="font-body text-sm text-bone leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-coal border border-smoke rounded-sm p-8">
              <h3 className="font-display text-xl text-pure mb-2">
                What's always included
              </h3>
              <p className="font-body text-xs text-ash mb-6">Regardless of package</p>
              <ul className="space-y-3">
                {[
                  'GDPR-compliant data processing agreement',
                  'ACCA-led delivery and review',
                  'UK working hours availability',
                  'Secure document handling',
                  'HMRC correspondence management',
                  'ICO-registered firm',
                  'MTD-compatible software',
                  'Clear onboarding process',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5 text-lime" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-body text-xs text-bone leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA */}
      <section className="section bg-coal border-t border-smoke text-center">
        <div className="container max-w-2xl">
          <p className="eyebrow mb-4">Ready to start?</p>
          <h2 className="font-display text-3xl text-pure mb-4">
            Book your free consultation
          </h2>
          <p className="font-body text-bone text-sm mb-8 leading-relaxed">
            20 minutes. We review your situation, recommend the right services, and confirm
            a fixed price. No commitment until you're happy.
          </p>
          <Button to="/contact" size="lg">
            Book a free consultation
          </Button>
        </div>
      </section>
    </>
  )
}
