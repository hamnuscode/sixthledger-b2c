import Hero from '../components/sections/Hero'
import TrustStrip from '../components/sections/TrustStrip'
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

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
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
