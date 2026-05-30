import { Link } from 'react-router-dom'

export default function Terms() {
  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Terms of Service</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Terms of Service
          </h1>
          <p className="font-body text-ash text-sm">
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container max-w-3xl">
          <div className="space-y-10">
            {[
              {
                title: '1. Agreement to terms',
                body: 'By accessing this website or engaging the services of SIXTHLEDGER (PVT) LTD ("Sixth Ledger", "we", "us"), you agree to be bound by these Terms of Service. If you do not agree, please do not use this website or our services.',
              },
              {
                title: '2. Services',
                body: 'Sixth Ledger provides accounting, bookkeeping, payroll, VAT, tax return preparation, and related professional services to UK businesses. The specific scope of services provided to any client is governed by a separate Engagement Letter agreed at the start of the engagement. These Terms of Service govern general use of this website and enquiries submitted through it.',
              },
              {
                title: '3. Professional advice',
                body: 'Content on this website is provided for general information purposes only. It does not constitute professional accounting, tax, or legal advice. You should not rely on any content on this website as a substitute for professional advice tailored to your specific circumstances. Formal professional advice is provided only through an agreed engagement.',
              },
              {
                title: '4. Intellectual property',
                body: 'All content on this website, including text, design, and code, is the property of SIXTHLEDGER (PVT) LTD. You may not reproduce, distribute, or create derivative works from any content on this website without prior written permission.',
              },
              {
                title: '5. Limitation of liability',
                body: 'To the maximum extent permitted by law, Sixth Ledger shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or reliance on its content. Our liability for any claim arising from an engagement is limited to the fees paid for that engagement in the relevant period.',
              },
              {
                title: '6. Third party links',
                body: 'This website may contain links to third party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.',
              },
              {
                title: '7. Governing law',
                body: 'These Terms of Service are governed by the laws of England and Wales. Any dispute arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
              },
              {
                title: '8. Changes',
                body: 'We may update these Terms of Service at any time. The date at the top of this page reflects the last update. Continued use of this website after an update constitutes acceptance of the revised terms.',
              },
              {
                title: '9. Contact',
                body: 'For any questions about these terms, contact us at info@sixthledger.com.',
              },
            ].map(section => (
              <div key={section.title} className="border-b border-smoke pb-8 last:border-b-0">
                <h2 className="font-display text-xl text-pure mb-3">{section.title}</h2>
                <p className="font-body text-sm text-bone leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-coal border-t border-smoke">
        <div className="container max-w-3xl">
          <div className="flex flex-wrap gap-5">
            <p className="font-mono text-xs text-ash uppercase tracking-label">Related:</p>
            <Link to="/privacy" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">Privacy Policy →</Link>
            <Link to="/cookies" className="font-mono text-xs text-bone hover:text-lime transition-colors uppercase tracking-label">Cookie Policy →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
