import { motion } from 'framer-motion'
import { Reveal, Stagger, item } from '../ui/Reveal'

const reasons = [
  {
    numeral: 'i.',
    title: 'You run your business. We handle the numbers.',
    body: 'Hand us your bookkeeping, payroll, VAT, and tax returns. They get done on time, every time. No chasing you. No reminders from HMRC.',
  },
  {
    numeral: 'ii.',
    title: 'Compliance built in from day one.',
    body: 'Every client receives a signed Data Processing Agreement, ICO registered data handling, and IDTA ready processes as standard.',
  },
  {
    numeral: 'iii.',
    title: 'ACCA qualified accountants. Not a bookkeeper with a spreadsheet.',
    body: 'Our team is ACCA qualified and operates to professional accounting standards. Technical expertise, professional ethics, and accountability are built into everything we do.',
  },
  {
    numeral: 'iv.',
    title: 'Start small. Scale when you\'re ready.',
    body: 'Begin with a single service, whether that\'s self assessment, bookkeeping, or something else. Add services as your business grows.',
  },
  {
    numeral: 'v.',
    title: 'Fully remote and built for it.',
    body: 'We work entirely online. Secure document sharing, video calls, and support during UK business hours. No office visits. No geographic limits.',
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
            Why business owners choose us and stay
          </h2>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0 border border-smoke" stagger={0.1}>
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
