import { Reveal } from '../ui/Reveal'

export default function FoundersSection() {
  return (
    <section className="section border-y border-smoke" style={{ background: 'var(--coal)' }} aria-labelledby="founders-heading">
      <div className="container">
        <Reveal delay={0.05}>
          <p className="eyebrow mb-4">The people behind it</p>
          <h2 id="founders-heading" className="font-display text-4xl md:text-5xl text-pure mb-12" style={{ letterSpacing: '-0.02em' }}>
            Run by ACCA qualified{' '}
            <span className="italic">accountants.</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {[
            {
              name: 'Shayan Ahmed Shujaat',
              role: 'Chief Executive Officer',
              initials: 'SA',
              bio: 'ACCA qualified accountant focused on helping UK sole traders and small businesses access professional accounting services without the cost and complexity of traditional firms.',
            },
            {
              name: 'Co-Founder',
              role: 'Head of Operations',
              initials: 'CF',
              bio: 'Responsible for client onboarding, operations, and service delivery. Ensures every client receives timely communication, accurate work, and a smooth experience from day one.',
            },
          ].map((founder) => (
            <Reveal key={founder.name} delay={0.1}>
              <div className="group cursor-default flex flex-col items-center text-center">
                {/* Photo placeholder */}
                <div
                  className="w-full aspect-square bg-obsidian border border-smoke group-hover:border-lime transition-colors duration-300 mb-5 flex items-center justify-center rounded-sm mx-auto"
                  style={{ maxWidth: '260px' }}
                  aria-label={`Photo of ${founder.name}`}
                >
                  <span className="font-display text-4xl text-ash/30 italic select-none">
                    {founder.initials}
                  </span>
                </div>
                <h3 className="font-display text-xl text-pure mb-1">{founder.name}</h3>
                <p className="font-mono text-xs text-lime uppercase tracking-label mb-3">{founder.role}</p>
                <p className="font-body text-sm text-bone leading-relaxed max-w-xs">{founder.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
