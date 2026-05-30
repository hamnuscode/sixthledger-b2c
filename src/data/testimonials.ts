export interface Testimonial {
  quote: string
  name: string
  business: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Six months in and the quality is excellent. Turnaround is faster than our previous accountant, and they were local.',
    name: 'Sarah M.',
    business: 'Independent Retail Business, Yorkshire',
    service: 'Year-End Accounts',
  },
  {
    quote: 'I barely need to do anything. They handle my self assessment end to end and flagged reliefs I didn\'t even know I could claim.',
    name: 'James T.',
    business: 'Freelance IT Consultant, London',
    service: 'Self Assessment',
  },
  {
    quote: 'The compliance setup was what made the decision. ICO registered, GDPR ready from day one, ACCA qualified, and they understood our obligations without us having to explain them.',
    name: 'Rachel O.',
    business: 'E-commerce Limited Company, Manchester',
    service: 'Compliance',
  },
]
