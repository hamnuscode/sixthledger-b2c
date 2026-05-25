import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const reasons = [
  {
    numeral: 'i.',
    title: 'You focus on your business',
    body: 'We take the admin off your hands entirely. Bookkeeping, payroll, VAT, tax returns — you hand them to us and they get done. No chasing, no reminders.',
  },
  {
    numeral: 'ii.',
    title: 'Compliance built in, not bolted on',
    body: 'ICO-registered, GDPR-compliant, IDTA-ready. The compliance infrastructure that larger firms charge extra for is standard with us from day one.',
  },
  {
    numeral: 'iii.',
    title: 'Real ACCA qualifications',
    body: 'Our team includes ACCA-qualified accountants and ACCA finalists. Not a generic bookkeeper. Not a spreadsheet service. Real professional credentials.',
  },
  {
    numeral: 'iv.',
    title: 'Start with one job',
    body: "No minimum commitment beyond what you need. Start with your self-assessment return. Add bookkeeping when you're ready. Scale at your pace.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section bg-obsidian" aria-labelledby="why-heading">
      <div className="container">
        <Reveal className="max-w-2xl mb-12" delay={0.05}>
          <p className="eyebrow mb-4">Why Sixth Ledger</p>
          <h2
            id="why-heading"
            className="font-display text-3xl md:text-4xl text-pure"
          >
            What makes us{' '}
            <span className="italic">different</span>
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-smoke" stagger={0.1}>
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.numeral}
              variants={item}
              className={`p-7 flex flex-col gap-4 group transition-colors duration-200 hover:bg-coal ${
                i < reasons.length - 1 ? 'border-r border-smoke' : ''
              } border-b sm:border-b-0`}
            >
              {/* Top border accent */}
              <div className="h-px bg-smoke relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 w-8 h-px bg-lime transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>

              <span
                className="font-display text-xl text-ash italic group-hover:text-lime transition-colors duration-200"
                aria-hidden="true"
              >
                {reason.numeral}
              </span>

              <h3 className="font-display text-lg text-pure leading-snug">
                {reason.title}
              </h3>

              <p className="font-body text-sm text-bone leading-relaxed">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
