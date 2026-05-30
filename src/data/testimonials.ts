export interface Testimonial {
  quote: string
  name: string
  role: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Six months in and the quality is excellent. Turnaround is faster than our previous accountant, and they were local.',
    name: 'Sarah M.',
    role: 'Independent Retail Business',
    location: 'Yorkshire',
  },
  {
    quote: "I barely need to do anything. They handle my self assessment end to end and flagged reliefs I didn't even know I could claim.",
    name: 'James T.',
    role: 'Freelance IT Consultant',
    location: 'London',
  },
  {
    quote: 'The compliance setup was what made the decision. ICO registered, GDPR ready from day one, ACCA qualified, and they understood our obligations without us having to explain them.',
    name: 'Rachel O.',
    role: 'Ecommerce Limited Company',
    location: 'Manchester',
  },
]
