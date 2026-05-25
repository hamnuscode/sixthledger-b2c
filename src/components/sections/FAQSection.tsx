import FAQItem from '../ui/FAQItem'
import { homeFaqs } from '../../data/faqs'
import { Reveal } from '../ui/Reveal'

export default function FAQSection() {
  return (
    <section
      className="section"
      style={{ background: 'var(--coal)' }}
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <Reveal delay={0.05}>
            <p className="eyebrow mb-4">FAQ</p>
            <h2
              id="faq-heading"
              className="font-display text-3xl md:text-4xl text-pure mb-5"
            >
              Common{' '}
              <span className="italic">questions</span>
            </h2>
            <p className="font-body text-bone text-sm leading-relaxed">
              Everything you need to know about working with Sixth Ledger. Can't find the
              answer you're looking for?{' '}
              <a href="/contact" className="text-lime hover:underline">
                Talk to us directly
              </a>
              .
            </p>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.12}>
            <div role="list">
              {homeFaqs.map((faq, i) => (
                <div key={i} role="listitem">
                  <FAQItem question={faq.q} answer={faq.a} defaultOpen={i === 0} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
