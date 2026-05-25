import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/services'
import Button from '../ui/Button'
import { Reveal, Stagger, item } from '../ui/Reveal'

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
                From monthly bookkeeping to year-end accounts, payroll to VAT — we cover all nine
                core accounting services for UK small businesses, contractors, and sole traders.
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
