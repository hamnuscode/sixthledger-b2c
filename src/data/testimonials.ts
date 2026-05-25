export interface Testimonial {
  quote: string
  name: string
  business: string
  service: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'We\'ve been using Sixth Ledger for our bookkeeping and monthly accounts for six months. The quality is excellent and the turnaround is faster than our previous provider — who was local.',
    name: 'Sarah M.',
    business: 'Independent Retail Business, Yorkshire',
    service: 'Bookkeeping & Management Accounts',
  },
  {
    quote: 'As a freelance consultant, the last thing I want to think about is my tax return. Sixth Ledger handles my self-assessment and I barely need to do anything. They flagged reliefs I didn\'t know existed.',
    name: 'James T.',
    business: 'Freelance IT Consultant, London',
    service: 'Self-Assessment',
  },
  {
    quote: 'The compliance credentials were the reason I went with them — ICO-registered, GDPR pack ready to go, and ACCA-led. For a growing business that takes our obligations seriously, that mattered.',
    name: 'Rachel O.',
    business: 'E-commerce Limited Company, Manchester',
    service: 'Full Service Package',
  },
]
