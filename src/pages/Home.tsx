import Hero from '../components/sections/Hero'
import StatBand from '../components/sections/StatBand'
import ServicesGrid from '../components/sections/ServicesGrid'
import ComplianceRibbon from '../components/sections/ComplianceRibbon'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'
import FoundersSection from '../components/sections/FoundersSection'
import ClosingCTA from '../components/sections/ClosingCTA'

function BookingHighlight() {
  return (
    <section className="border-y border-smoke" style={{ background: 'var(--coal)' }} aria-label="Book a free consultation">
      <div className="container py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="eyebrow mb-3">Free consultation</p>
            <h2 className="font-display text-3xl md:text-4xl text-pure" style={{ letterSpacing: '-0.02em' }}>
              Book a free 30-minute call.
            </h2>
            <p className="font-body text-bone text-base leading-relaxed mt-3 max-w-lg">
              Tell us about your business. We'll tell you exactly how we can help and what it costs. No obligation.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://calendly.com/sixthledger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-lime text-obsidian font-body font-semibold text-sm px-8 py-4 hover:bg-lime-soft active:scale-[0.98] transition-all duration-150 rounded-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Book on Calendly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <BookingHighlight />
      <StatBand />
      <ServicesGrid />
      <ComplianceRibbon />
      <WhyChooseUs />
      <HowItWorks />
      <FoundersSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <ClosingCTA />
    </>
  )
}
