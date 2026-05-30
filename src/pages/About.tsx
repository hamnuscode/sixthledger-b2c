import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const team = [
  {
    name: 'Shayan Ahmed Shujaat',
    role: 'Chief Executive Officer',
    credentials: 'ACCA Finalist',
    bio: 'Shayan founded Sixth Ledger with a clear mission: give UK small businesses access to the same quality of accounting that larger companies take for granted. He leads client relationships, business development, and strategic direction.',
    linkedin: 'https://linkedin.com/in/',
  },
]

const platforms = ['Xero', 'QuickBooks', 'Sage', 'FreeAgent', 'HMRC MTD', 'BrightPay']

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">About</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">About us</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4 max-w-2xl">
            Professional accounting.{' '}
            <span className="italic">Built for the way you work.</span>
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            Sixth Ledger is an ACCA led accounting firm working exclusively with UK small
            businesses, freelancers, and sole traders. We handle the numbers so you can
            handle the business.
          </p>
        </div>
      </section>

      {/* Brand story */}
      <section className="section bg-obsidian">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <p className="eyebrow">Our story</p>
              <div className="space-y-4 font-body text-bone text-sm leading-relaxed">
                <p>
                  Sixth Ledger was built on a simple observation: UK small businesses and
                  freelancers are underserved by their accountants. Either the service is too
                  expensive, too slow, or too generic to be genuinely useful.
                </p>
                <p>
                  We set out to change that. By operating with an ACCA qualified team, working
                  UK business hours, and keeping our pricing fixed and transparent, we give
                  small businesses the professional accounting service they deserve, without
                  the high-street price tag.
                </p>
                <p>
                  We're ICO registered in the UK, operate under UK GDPR, and have built our
                  data processing infrastructure to meet the standards that UK clients require.
                  Compliance isn't an afterthought, it's the foundation.
                </p>
                <p>
                  Every client gets ACCA led delivery, clear turnaround times, and a service
                  that expands as their business grows. We start with one job. We grow from
                  there.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Key facts */}
              <div className="bg-coal border border-smoke rounded-sm p-6">
                <h2 className="font-display text-xl text-pure mb-5">
                  Key facts
                </h2>
                <dl className="space-y-4">
                  {[
                    { dt: 'Legal name', dd: 'SIXTHLEDGER (PVT) LTD' },
                    { dt: 'Registration', dd: 'SECP Pakistan (in progress)' },
                    { dt: 'UK Data Protection', dd: 'ICO Registered, ZA (pending)' },
                    { dt: 'Professional body', dd: 'ACCA led delivery' },
                    { dt: 'Services market', dd: 'UK small businesses, contractors, freelancers' },
                    { dt: 'Working hours', dd: 'UK business hours, Monday to Friday' },
                    { dt: 'Office', dd: 'Islamabad, Pakistan' },
                    { dt: 'Contact', dd: 'info@sixthledger.com' },
                  ].map(item => (
                    <div key={item.dt} className="flex gap-4">
                      <dt className="font-mono text-xs text-ash uppercase tracking-label w-32 flex-shrink-0 pt-0.5">
                        {item.dt}
                      </dt>
                      <dd className="font-body text-sm text-bone">{item.dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Platforms */}
              <div className="bg-coal border border-smoke rounded-sm p-6">
                <h3 className="font-display text-base text-pure mb-4">
                  Platforms we work in
                </h3>
                <div className="flex flex-wrap gap-2">
                  {platforms.map(p => (
                    <span key={p} className="font-mono text-xs text-bone bg-smoke px-3 py-1.5 rounded-sm">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-coal border-t border-smoke" aria-labelledby="team-heading">
        <div className="container">
          <p className="eyebrow mb-4">The team</p>
          <h2 id="team-heading" className="font-display text-3xl text-pure mb-10">
            The people behind the{' '}
            <span className="italic">numbers</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-obsidian border border-smoke rounded-sm p-6">
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-sm bg-smoke flex items-center justify-center mb-5 text-ash"
                  aria-hidden="true"
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4 24c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                <h3 className="font-display text-lg text-pure mb-0.5">{member.name}</h3>
                <p className="font-body text-sm text-bone mb-1">{member.role}</p>
                <p className="font-mono text-xs text-lime uppercase tracking-label mb-4">
                  {member.credentials}
                </p>
                <p className="font-body text-xs text-ash leading-relaxed mb-5">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label flex items-center gap-1.5"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            ))}

            {/* Placeholder for additional team */}
            <div className="bg-obsidian border border-dashed border-smoke rounded-sm p-6 flex flex-col items-center justify-center text-center gap-3 min-h-48">
              <p className="font-mono text-xs text-ash uppercase tracking-label">
                Team growing
              </p>
              <p className="font-body text-xs text-ash max-w-xs">
                We're building our team of ACCA qualified accountants. More profiles coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working hours */}
      <section className="section bg-obsidian border-t border-smoke">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Availability</p>
              <h2 className="font-display text-3xl text-pure mb-5">
                UK hours, always
              </h2>
              <p className="font-body text-bone text-sm leading-relaxed mb-4">
                We work UK business hours, Monday to Friday, 9am to 5:30pm GMT. During peak
                seasons (January self assessment, year end periods) we extend hours to ensure
                no deadline is missed.
              </p>
              <p className="font-body text-bone text-sm leading-relaxed">
                You will always reach a real person. Not an automated response. Not a ticket
                system. A qualified accountant who knows your file.
              </p>
            </div>
            <div className="bg-coal border border-smoke rounded-sm p-6">
              <h3 className="font-display text-base text-pure mb-5">Office hours</h3>
              <dl className="space-y-3">
                {[
                  { dt: 'Monday to Friday', dd: '9:00am  to  5:30pm GMT' },
                  { dt: 'Peak season (Jan)', dd: 'Extended hours available' },
                  { dt: 'Email response', dd: 'Same day (received before 3pm GMT)' },
                  { dt: 'Emergency contact', dd: 'info@sixthledger.com' },
                ].map(item => (
                  <div key={item.dt} className="flex gap-6 border-b border-smoke pb-3 last:border-b-0">
                    <dt className="font-mono text-xs text-ash uppercase tracking-label w-36 flex-shrink-0">
                      {item.dt}
                    </dt>
                    <dd className="font-body text-sm text-bone">{item.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-coal border-t border-smoke text-center">
        <div className="container max-w-xl">
          <h2 className="font-display text-3xl text-pure mb-4">
            Ready to work together?
          </h2>
          <p className="font-body text-bone text-sm mb-8 leading-relaxed">
            Book a free 20-minute consultation. No obligation, no hard sell.
            Just a straightforward conversation about your accounting needs.
          </p>
          <Button to="/contact" size="lg">
            Book a free consultation
          </Button>
        </div>
      </section>
    </>
  )
}
