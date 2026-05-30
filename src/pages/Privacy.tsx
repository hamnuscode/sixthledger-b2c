import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Privacy Policy</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-ash text-sm">
            Last updated: May 2026 · ICO Registration: ZA, pending
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container max-w-3xl">
          <div className="prose-custom">
            <LegalSection title="1. Who we are">
              <p>
                Sixth Ledger is operated by SIXTHLEDGER (PVT) LTD, a company registered in Pakistan.
                We provide accounting and bookkeeping services to UK small businesses, freelancers,
                and sole traders.
              </p>
              <p>
                We are registered with the UK Information Commissioner's Office (ICO) as a data
                controller. Our ICO registration number is displayed in the footer of this website.
              </p>
              <p>
                <strong>Contact:</strong> info@sixthledger.com<br />
                <strong>Address:</strong> Islamabad, Pakistan
              </p>
            </LegalSection>

            <LegalSection title="2. Data we collect">
              <p>We collect the following personal data when you:</p>
              <ul>
                <li>Complete the contact form on this website (name, email address, phone number, enquiry details)</li>
                <li>Book a consultation via our calendar booking system (name, email address, time zone)</li>
                <li>Engage us as a client (financial records, business information, tax-related personal data as required to perform our services)</li>
                <li>Subscribe to our newsletter, if available (email address)</li>
                <li>Communicate with us by email or telephone</li>
              </ul>
              <p>
                We do not use tracking cookies or analytics tools that collect personal data without
                your consent. Our website analytics (if used) are privacy-friendly and do not require
                cookie consent.
              </p>
            </LegalSection>

            <LegalSection title="3. How we use your data">
              <p>We process your personal data for the following purposes:</p>
              <ul>
                <li><strong>To respond to enquiries</strong>, Lawful basis: legitimate interest (responding to a direct request)</li>
                <li><strong>To deliver accounting services</strong>, Lawful basis: performance of a contract</li>
                <li><strong>To comply with legal and regulatory obligations</strong>, Lawful basis: legal obligation (e.g. HMRC reporting requirements)</li>
                <li><strong>To send marketing communications</strong>, Lawful basis: consent (you can withdraw at any time)</li>
              </ul>
            </LegalSection>

            <LegalSection title="4. International data transfers">
              <p>
                Sixth Ledger operates from Pakistan. When you provide personal data through this
                website or engage our services, that data may be transferred to and processed in
                Pakistan, which is outside the UK.
              </p>
              <p>
                We have implemented appropriate safeguards for such transfers, including UK IDTA compatible
                Data Processing Agreements. On request, we will provide a copy of the transfer mechanism
                in use.
              </p>
            </LegalSection>

            <LegalSection title="5. Data retention">
              <p>
                We retain personal data for as long as necessary to provide the services engaged and
                to comply with legal obligations (typically 7 years for UK accounting records, in line
                with HMRC requirements). Personal data collected from website enquiries that do not
                result in an engagement is deleted after 12 months.
              </p>
            </LegalSection>

            <LegalSection title="6. Your rights">
              <p>Under UK GDPR, you have the following rights:</p>
              <ul>
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure ('right to be forgotten'), subject to legal obligations</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing based on legitimate interest</li>
                <li>The right to withdraw consent at any time (where processing is based on consent)</li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="mailto:privacy@sixthledger.com" className="text-lime hover:underline">
                  privacy@sixthledger.com
                </a>
                . We will respond within one calendar month.
              </p>
            </LegalSection>

            <LegalSection title="7. Complaints">
              <p>
                If you are unhappy with how we have handled your personal data, you have the right
                to lodge a complaint with the UK Information Commissioner's Office (ICO) at{' '}
                <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-lime hover:underline">
                  ico.org.uk
                </a>
                . We would appreciate the opportunity to address your concerns before you approach
                the ICO, please contact us first at{' '}
                <a href="mailto:privacy@sixthledger.com" className="text-lime hover:underline">
                  privacy@sixthledger.com
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection title="8. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. The date at the top of this
                page reflects when the policy was last updated. Continued use of this website after
                an update constitutes acceptance of the revised policy.
              </p>
            </LegalSection>
          </div>
        </div>
      </section>

      <section className="py-8 bg-coal border-t border-smoke">
        <div className="container max-w-3xl">
          <div className="flex flex-wrap gap-5">
            <p className="font-mono text-xs text-ash uppercase tracking-label">Related:</p>
            <Link to="/terms" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">Terms of Service →</Link>
            <Link to="/cookies" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">Cookie Policy →</Link>
            <Link to="/compliance" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">Compliance overview →</Link>
          </div>
        </div>
      </section>
    </>
  )
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 border-b border-smoke pb-10 last:border-b-0">
      <h2 className="font-display text-xl text-pure mb-4">{title}</h2>
      <div className="space-y-3 font-body text-sm text-bone leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1.5 [&_strong]:text-pure">
        {children}
      </div>
    </div>
  )
}
