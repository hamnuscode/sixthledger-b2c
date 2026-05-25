import Hero from '../components/sections/Hero'
import StatBand from '../components/sections/StatBand'
import ServicesGrid from '../components/sections/ServicesGrid'
import ComplianceRibbon from '../components/sections/ComplianceRibbon'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'
import ClosingCTA from '../components/sections/ClosingCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <ServicesGrid />
      <ComplianceRibbon />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <ClosingCTA />
    </>
  )
}
