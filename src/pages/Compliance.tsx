import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const complianceItems = [
  {
    badge: 'ICO',
    title: 'ICO Registered',
    subtitle: "UK Information Commissioner's Office",
    body: "Sixth Ledger is registered with the UK Information Commissioner's Office (ICO) as a data controller. Our registration confirms we handle personal data in accordance with UK GDPR obligations. Our ICO registration number is displayed in the footer of every page on this website.",
    link: 'https://ico.org.uk/ESDWebPages/Entry/',
    linkText: 'Verify on ICO public register →',
  },
  {
    badge: 'GDPR',
    title: 'UK GDPR Compliant',
    subtitle: 'UK General Data Protection Regulation',
    body: 'We process personal data strictly in accordance with the UK General Data Protection Regulation. Every client engagement includes a UK GDPR-compliant Data Processing Agreement (DPA). Our full Privacy Policy sets out how we collect, use, and protect personal data.',
    link: '/privacy',
    linkText: 'Read our Privacy Policy →',
  },
  {
    badge: 'IDTA',
    title: 'IDTA-Ready',
    subtitle: 'International Data Transfer Agreement',
    body: 'We are ready to enter into the UK International Data Transfer Agreement (IDTA) for clients who require it. This is particularly relevant for UK clients whose data may be processed outside the UK. Our standard DPA includes IDTA-compatible provisions as a matter of course.',
    link: '/compliance',
    linkText: 'Request our GDPR pack →',
  },
  {
    badge: 'MTD',
    title: 'Making Tax Digital Ready',
    subtitle: 'HMRC MTD-compliant submissions',
    body: "All VAT returns are submitted through MTD-compatible software in compliance with HMRC's Making Tax Digital requirements. We work with Xero, QuickBooks, Sage, and FreeAgent — all of which are HMRC-approved for MTD submissions.",
    link: '/services/vat',
    linkText: 'Learn about our VAT service →',
  },
  {
    badge: 'ACCA',
    title: 'ACCA-Led Delivery',
    subtitle: 'Association of Chartered Certified Accountants',
    body: "Our accounting team is led by ACCA-qualified and ACCA-affiliated professionals. All work is delivered and reviewed under ACCA's professional ethics code, which requires confidentiality, integrity, objectivity, and professional competence as standard.",
    link: 'https://www.accaglobal.com/',
    linkText: 'Learn about ACCA →',
  },
]

export default function Compliance() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Compliance</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Compliance</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4 max-w-2xl">
            Compliance built in,{' '}
            <span className="italic">not bolted on.</span>
          </h1>
          <p className="font-body text-bone text-base max-w-xl leading-relaxed">
            ICO-registered. UK GDPR-compliant. IDTA-ready. MTD-compliant. ACCA-led. Here is
            the full compliance picture — everything you need to verify before working with us.
          </p>
        </div>
      </section>

      {/* Compliance items */}
      <section className="section bg-obsidian" aria-label="Compliance credentials">
        <div className="container">
          <div className="space-y-0 border border-smoke rounded-sm overflow-hidden">
            {complianceItems.map((item, i) => (
              <div
                key={item.badge}
                className={`grid md:grid-cols-4 gap-6 p-8 ${
                  i < complianceItems.length - 1 ? 'border-b border-smoke' : ''
                }`}
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-lime uppercase tracking-label">
                    {item.badge}
                  </span>
                  <h2 className="font-display text-lg text-pure mt-2 mb-1">
                    {item.title}
                  </h2>
                  <p className="font-body text-xs text-ash leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="font-body text-sm text-bone leading-relaxed mb-4">
                    {item.body}
                  </p>
                  <a
                    href={item.link}
                    className="font-mono text-xs text-lime hover:underline uppercase tracking-label"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR Pack download */}
      <section className="section bg-coal border-t border-smoke">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Due diligence</p>
              <h2 className="font-display text-3xl text-pure mb-4">
                Request our GDPR pack
              </h2>
              <p className="font-body text-bone text-sm leading-relaxed mb-4">
                For clients who require formal documentation before engaging, we provide a full
                GDPR pack on request. This includes our Privacy Policy, Data Processing
                Agreement template, Sub-processor List, and IDTA provisions.
              </p>
              <p className="font-body text-bone text-sm leading-relaxed">
                Contact us with your request and we'll send it to you within one business day.
              </p>
            </div>
            <div className="bg-obsidian border border-smoke rounded-sm p-6">
              <h3 className="font-display text-xl text-pure mb-5">
                GDPR pack contents
              </h3>
              <ul className="space-y-3">
                {[
                  'Privacy Policy',
                  'Data Processing Agreement (DPA) template',
                  'Sub-processor list',
                  'IDTA-compatible clauses',
                  'ICO registration confirmation',
                  'Data retention schedule',
                  'Data breach notification procedure',
                  'Subject access request procedure',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-lime" aria-hidden="true">
                      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-body text-xs text-bone">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button to="/contact" size="sm" variant="outline" className="w-full">
                  Request GDPR pack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal links */}
      <section className="py-10 bg-obsidian border-t border-smoke">
        <div className="container">
          <div className="flex flex-wrap gap-6">
            <p className="font-mono text-xs text-ash uppercase tracking-label">Legal pages:</p>
            {[
              { to: '/privacy', label: 'Privacy Policy' },
              { to: '/terms', label: 'Terms of Service' },
              { to: '/cookies', label: 'Cookie Policy' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
