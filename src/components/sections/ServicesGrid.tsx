import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/services'
import Button from '../ui/Button'
import { Reveal, Stagger, item } from '../ui/Reveal'

const serviceIcons: Record<string, JSX.Element> = {
  bookkeeping: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M5 5h6M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  payroll: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M2 13c0-2.2 1.8-4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M10 10h4M12 8v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  vat: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/><circle cx="6" cy="6.5" r="1" fill="currentColor"/><circle cx="10" cy="9.5" r="1" fill="currentColor"/><path d="M10 6L6 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  'year end-accounts': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M5 3V1M11 3V1M2 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M5.5 10l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'management-accounts': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 12l4-4 3 2 5-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  'self-assessment': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="3" y="1" width="10" height="13" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M6 5h4M6 8h4M6 11h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  cis: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 14h12M4 14V8l4-4 4 4v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.2"/></svg>
  ),
  'company-secretarial': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5V2M8 14v-3M5 8H2M14 8h-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  'annual-accounts': (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 13V5l2-2h8v10H3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M5 5h-2M6 8h5M6 11h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
}

export default function ServicesGrid() {
  return (
    <section className="section bg-obsidian" aria-labelledby="services-heading">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: intro */}
          <div className="lg:col-span-1">
            <Reveal delay={0.05}>
              <p className="eyebrow mb-4">What we handle</p>
              <h2
                id="services-heading"
                className="font-display text-3xl md:text-4xl text-pure mb-5"
              >
                Everything your business needs,{' '}
                <span className="italic">handled.</span>
              </h2>
              <p className="text-bone text-sm leading-relaxed mb-6">
                From monthly bookkeeping to year end accounts and VAT returns, everything is handled remotely, on time, and to a professional standard. Nine services. One firm. No switching.
              </p>
              <Button to="/services" variant="outline" size="sm">
                View all services
              </Button>
            </Reveal>
          </div>

          {/* Right: grid */}
          <div className="lg:col-span-2">
            <Stagger className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-smoke" stagger={0.055}>
              {services.map(service => (
                <motion.div key={service.id} variants={item}>
                  <Link
                    to={`/services/${service.id}`}
                    className="group bg-obsidian p-5 flex flex-col gap-2 border border-transparent hover:border-lime transition-all duration-200 focus-visible:outline-none focus-visible:border-lime h-full hover:-translate-y-0.5 hover:shadow-lime-sm"
                    style={{ display: 'flex' }}
                  >
                    {serviceIcons[service.id] && (
                      <span className="text-ash group-hover:text-lime transition-colors duration-200 mb-1 block">
                        {serviceIcons[service.id]}
                      </span>
                    )}
                    <span className="font-mono text-xs text-lime tracking-label">
                      {service.number}
                    </span>
                    <h3 className="font-display text-base text-pure font-medium group-hover:text-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-xs text-ash leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <span className="mt-auto text-lime text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 pt-2">
                      Learn more
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
