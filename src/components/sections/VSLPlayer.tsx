import { useState } from 'react'

export default function VSLPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative">
      {/* Lime glow beneath */}
      <div
        className="absolute -inset-px rounded-sm opacity-60 blur-xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(200,232,74,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Player housing */}
      <div
        className="relative rounded-sm overflow-hidden border border-smoke"
        style={{ background: 'var(--coal)' }}
      >
        {/* Thin lime accent rule at top */}
        <div className="h-px bg-lime w-full opacity-60" aria-hidden="true" />

        {/* Video area */}
        <div className="aspect-video relative bg-coal flex items-center justify-center group cursor-pointer"
          onClick={() => setPlaying(!playing)}
          role="button"
          aria-label="Play introduction video"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setPlaying(!playing)}
        >
          {/* Dark cinematic placeholder background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0A0A0A 0%, #141414 40%, #0F0A05 100%)',
            }}
            aria-hidden="true"
          />

          {/* Atmospheric light effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(ellipse at 30% 50%, rgba(255,180,80,0.08) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          {!playing ? (
            <>
              {/* Placeholder thumbnail text */}
              <div className="relative z-10 text-center px-8 select-none" aria-hidden="true">
                <p className="font-mono text-xs text-ash uppercase tracking-label mb-4">
                  Shayan Ahmed Shujaat · CEO
                </p>
                <p className="font-display text-xl text-pure italic leading-snug max-w-xs mx-auto">
                  "Here's exactly how we work and why UK businesses trust us."
                </p>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button
                  className="flex items-center justify-center w-16 h-16 rounded-full border border-lime bg-obsidian hover:bg-lime group/play transition-all duration-200 shadow-lime"
                  aria-label="Play video"
                  onClick={e => { e.stopPropagation(); setPlaying(true) }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="ml-1 text-lime group-hover/play:text-obsidian transition-colors"
                  >
                    <path d="M5 3l13 7-13 7V3z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="relative z-10 text-center px-8 py-12">
              <p className="font-mono text-xs text-lime uppercase tracking-label mb-3">
                Video coming soon
              </p>
              <p className="font-body text-bone text-sm">
                Our introduction video will be available shortly.
                <br />
                In the meantime,{' '}
                <a
                  href="/contact"
                  className="text-lime hover:underline"
                  onClick={e => e.stopPropagation()}
                >
                  book a free consultation
                </a>
                .
              </p>
            </div>
          )}
        </div>

        {/* Caption below player */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-smoke">
          <p className="font-mono text-xs text-ash uppercase tracking-label">
            Introduction · 4 minutes
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs text-ash">Watch first</span>
          </div>
        </div>
      </div>
    </div>
  )
}
