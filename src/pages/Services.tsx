import { Link } from 'react-router-dom'
import { services } from '../data/services'
import Button from '../components/ui/Button'

export default function Services() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Services</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Our services</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Nine services. One{' '}
            <span className="italic">accountancy partner.</span>
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            Everything a UK small business, contractor, or sole trader needs — under one
            roof. ACCA-led, MTD-ready, delivered in UK working hours.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section bg-obsidian" aria-label="Services list">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group bg-coal border border-smoke hover:border-lime rounded-sm p-6 flex flex-col gap-4 transition-all duration-200 focus-visible:outline-none focus-visible:border-lime"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-lime tracking-label">
                    {service.number}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-ash group-hover:text-lime group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    aria-hidden="true"
                  >
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-display text-lg text-pure mb-2 group-hover:text-lime transition-colors">
                    {service.title}
                  </h2>
                  <p className="font-body text-xs text-bone leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <p className="font-body text-xs text-ash leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto pt-3 border-t border-smoke">
                  {service.platforms.slice(0, 3).map(p => (
                    <span
                      key={p}
                      className="font-mono text-xs text-ash bg-smoke px-2 py-0.5 rounded-sm"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-coal border-t border-smoke">
        <div className="container text-center">
          <h2 className="font-display text-3xl text-pure mb-4">
            Not sure which services you need?
          </h2>
          <p className="font-body text-bone text-sm mb-8 max-w-md mx-auto">
            Book a free 20-minute consultation. We'll review your situation and recommend exactly what makes sense for your business.
          </p>
          <Button to="/contact" size="lg">
            Book a free consultation
          </Button>
        </div>
      </section>
    </>
  )
}
