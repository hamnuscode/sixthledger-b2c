import { Reveal } from '../ui/Reveal'
import Button from '../ui/Button'

export default function ClosingCTA() {
  return (
    <section
      className="section bg-obsidian border-t border-smoke relative overflow-hidden"
      aria-labelledby="closing-cta-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(200,232,74,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="container text-center relative z-10">
        <Reveal delay={0.05} type="fade">
          <p className="eyebrow mb-5">Get started</p>
        </Reveal>

        <Reveal delay={0.12}>
          <h2
            id="closing-cta-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl text-pure mb-6 max-w-3xl mx-auto"
            style={{ letterSpacing: '-0.02em' }}
          >
            Try us on one job.{' '}
            <span className="italic">No contract. No commitment.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="font-body text-bone text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Start with your self assessment, bookkeeping, or whatever you need most right now. See the quality first, then decide whether you want more.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button to="/contact" size="lg">
              Book a free consultation
            </Button>
            <Button to="/pricing" variant="ghost" size="lg">
              View pricing
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4} type="fade">
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-smoke"
            aria-label="Direct contact options"
          >
            <a
              href="mailto:info@sixthledger.com"
              className="flex items-center gap-2 text-ash hover:text-lime transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1" y="2.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <path d="M1 4l6 4.5L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="font-body text-xs">info@sixthledger.com</span>
            </a>

            <span className="hidden sm:block text-smoke" aria-hidden="true">·</span>
            <span className="flex items-center gap-2 text-ash">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="font-body text-xs">Mon to Fri, 9am to 5pm GMT</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
