import { motion } from 'framer-motion'
import { testimonials } from '../../data/testimonials'
import { Reveal, Stagger, item } from '../ui/Reveal'

export default function Testimonials() {
  return (
    <section className="section bg-obsidian" aria-labelledby="testimonials-heading">
      <div className="container">
        <Reveal className="max-w-2xl mb-12" delay={0.05}>
          <p className="eyebrow mb-4">What clients say</p>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl md:text-4xl text-pure"
          >
            Trusted by UK{' '}
            <span className="italic">small businesses</span>
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6" stagger={0.12}>
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={item}
              className="bg-coal border border-smoke rounded-sm p-6 flex flex-col gap-5 hover:border-lime/40 hover:-translate-y-1 hover:shadow-lime transition-all duration-300 cursor-default"
            >
              <span
                className="font-display text-5xl text-lime leading-none select-none"
                aria-hidden="true"
              >
                "
              </span>

              <p className="font-display text-base text-bone italic leading-relaxed flex-1">
                {t.quote}
              </p>

              <footer className="border-t border-smoke pt-4 mt-auto">
                <cite className="not-italic">
                  <p className="font-body text-sm text-pure font-medium">{t.name}</p>
                  <p className="font-body text-xs text-ash mt-0.5">{t.business}</p>
                  <p className="font-mono text-xs text-lime mt-1 uppercase tracking-label">
                    {t.service}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
