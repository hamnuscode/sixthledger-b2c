import { useParams, Link, Navigate } from 'react-router-dom'
import { getService, services } from '../data/services'
import FAQItem from '../components/ui/FAQItem'
import Button from '../components/ui/Button'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = getService(slug || '')

  if (!service) return <Navigate to="/services" replace />

  const currentIndex = services.findIndex(s => s.id === slug)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <>
      {/* Breadcrumb + hero */}
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/services" className="hover:text-lime transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">{service.title}</li>
            </ol>
          </nav>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">{service.number}, Service</p>
              <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
                {service.title}
              </h1>
              <p className="font-body text-bone text-base max-w-xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-obsidian">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-12">
              {/* What we handle */}
              <div>
                <h2 className="font-display text-2xl text-pure mb-6">
                  What we handle
                </h2>
                <ul className="space-y-3">
                  {service.tasks.map(task => (
                    <li key={task} className="flex items-start gap-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="flex-shrink-0 mt-1 text-lime"
                        aria-hidden="true"
                      >
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-body text-sm text-bone leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Software we work in */}
              <div className="border-t border-smoke pt-10">
                <h2 className="font-display text-2xl text-pure mb-6">
                  Software we work in
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.platforms.map(platform => (
                    <span
                      key={platform}
                      className="font-mono text-sm text-bone bg-coal border border-smoke px-4 py-2 rounded-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              {/* Turnaround */}
              <div className="border-t border-smoke pt-10">
                <h2 className="font-display text-2xl text-pure mb-4">
                  Turnaround
                </h2>
                <div className="bg-coal border border-smoke rounded-sm p-5 flex items-center gap-4">
                  <div className="w-1 h-full self-stretch bg-lime rounded-full flex-shrink-0" aria-hidden="true" />
                  <p className="font-body text-sm text-bone leading-relaxed">
                    {service.turnaround}
                  </p>
                </div>
              </div>

              {/* Pricing model */}
              <div className="border-t border-smoke pt-10">
                <h2 className="font-display text-2xl text-pure mb-4">
                  Pricing model
                </h2>
                <p className="font-body text-sm text-bone leading-relaxed mb-4">
                  We price on a fixed-fee monthly retainer or per-engagement basis, depending
                  on your requirements. Pricing is agreed at onboarding and confirmed in your
                  engagement letter, no hidden costs, no surprise invoices.
                </p>
                <Button to="/contact" variant="outline" size="sm">
                  Get a quote
                </Button>
              </div>

              {/* FAQ */}
              <div className="border-t border-smoke pt-10">
                <h2 className="font-display text-2xl text-pure mb-6">
                  Frequently asked questions
                </h2>
                <div>
                  {service.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA card */}
                <div className="bg-coal border border-lime rounded-sm p-6 shadow-lime">
                  <p className="eyebrow mb-3">Get started</p>
                  <h3 className="font-display text-xl text-pure mb-3">
                    Start with {service.title}
                  </h3>
                  <p className="font-body text-xs text-bone leading-relaxed mb-5">
                    Book a free 20-minute consultation. We'll confirm exactly what's included and
                    the price for your situation.
                  </p>
                  <Button to="/contact" size="md" className="w-full">
                    Book a free consultation
                  </Button>
                  <p className="font-mono text-xs text-ash text-center mt-3 uppercase tracking-label">
                    No commitment required
                  </p>
                </div>

                {/* Other services */}
                <div className="bg-coal border border-smoke rounded-sm p-5">
                  <p className="font-mono text-xs text-ash uppercase tracking-label mb-4">
                    Other services
                  </p>
                  <ul className="space-y-1">
                    {services
                      .filter(s => s.id !== service.id)
                      .slice(0, 5)
                      .map(s => (
                        <li key={s.id}>
                          <Link
                            to={`/services/${s.id}`}
                            className="flex items-center gap-2 py-2 text-bone hover:text-lime transition-colors group"
                          >
                            <span className="font-mono text-xs text-ash group-hover:text-lime">
                              {s.number}
                            </span>
                            <span className="font-body text-xs">{s.title}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Link
                    to="/services"
                    className="font-mono text-xs text-lime hover:underline mt-3 block uppercase tracking-label"
                  >
                    View all →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev/Next navigation */}
      <section className="bg-coal border-t border-smoke py-8">
        <div className="container">
          <div className="flex items-center justify-between gap-6">
            {prevService ? (
              <Link
                to={`/services/${prevService.id}`}
                className="flex items-center gap-3 text-bone hover:text-lime transition-colors group"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:-translate-x-0.5 transition-transform">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="font-mono text-xs text-ash uppercase tracking-label">Previous</p>
                  <p className="font-body text-sm">{prevService.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextService ? (
              <Link
                to={`/services/${nextService.id}`}
                className="flex items-center gap-3 text-bone hover:text-lime transition-colors text-right group"
              >
                <div>
                  <p className="font-mono text-xs text-ash uppercase tracking-label">Next</p>
                  <p className="font-body text-sm">{nextService.title}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  )
}
