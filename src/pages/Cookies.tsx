import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function Cookies() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-obsidian border-b border-smoke">
        <div className="container">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-xs text-ash uppercase tracking-label">
              <li><Link to="/" className="hover:text-lime transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-bone">Cookie Policy</li>
            </ol>
          </nav>
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl text-pure mb-4">
            Cookie Policy
          </h1>
          <p className="font-body text-ash text-sm">
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="section bg-obsidian">
        <div className="container max-w-3xl">
          <div className="space-y-10">
            <div className="border-b border-smoke pb-8">
              <h2 className="font-display text-xl text-pure mb-3">What are cookies?</h2>
              <p className="font-body text-sm text-bone leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help
                websites function correctly and allow website owners to understand how their site is used.
              </p>
            </div>

            <div className="border-b border-smoke pb-8">
              <h2 className="font-display text-xl text-pure mb-3">Cookies we use</h2>
              <div className="space-y-4">
                {[
                  {
                    name: 'Strictly necessary',
                    always: true,
                    description: 'Essential for the website to function. These cookies cannot be disabled. They include cookies that remember your cookie consent preferences.',
                    examples: ['cookie_consent', 'session'],
                  },
                  {
                    name: 'Analytics',
                    always: false,
                    description: 'Help us understand how visitors interact with the website. We use privacy-friendly analytics that do not collect personal data or require consent under PECR in most configurations.',
                    examples: ['_plausible'],
                  },
                  {
                    name: 'Marketing',
                    always: false,
                    description: 'Used to track visitors across websites for targeted advertising. We do not currently use marketing cookies. This category is provided for completeness.',
                    examples: ['None currently'],
                  },
                ].map(cat => (
                  <div key={cat.name} className="bg-coal border border-smoke rounded-sm p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-body text-sm text-pure font-semibold">{cat.name}</h3>
                      {cat.always ? (
                        <span className="font-mono text-xs text-ash uppercase tracking-label">Always on</span>
                      ) : (
                        <span className="font-mono text-xs text-lime uppercase tracking-label">Optional</span>
                      )}
                    </div>
                    <p className="font-body text-xs text-bone leading-relaxed mb-2">{cat.description}</p>
                    <p className="font-mono text-xs text-ash">
                      Examples: {cat.examples.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Manage preferences */}
            <div className="border-b border-smoke pb-8">
              <h2 className="font-display text-xl text-pure mb-3">Manage your preferences</h2>
              <p className="font-body text-sm text-bone mb-6 leading-relaxed">
                You can update your cookie preferences at any time using the controls below.
              </p>

              <div className="space-y-4 mb-6">
                <PreferenceToggle
                  id="pref-necessary"
                  label="Strictly necessary"
                  description="Cannot be disabled"
                  checked={preferences.necessary}
                  disabled
                  onChange={() => {}}
                />
                <PreferenceToggle
                  id="pref-analytics"
                  label="Analytics cookies"
                  description="Help us improve the website"
                  checked={preferences.analytics}
                  onChange={v => setPreferences(p => ({ ...p, analytics: v }))}
                />
                <PreferenceToggle
                  id="pref-marketing"
                  label="Marketing cookies"
                  description="Not currently used"
                  checked={preferences.marketing}
                  onChange={v => setPreferences(p => ({ ...p, marketing: v }))}
                />
              </div>

              <div className="flex items-center gap-4">
                <Button onClick={handleSave} size="sm">
                  Save preferences
                </Button>
                {saved && (
                  <span className="font-mono text-xs text-lime uppercase tracking-label">
                    Preferences saved ✓
                  </span>
                )}
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl text-pure mb-3">More information</h2>
              <p className="font-body text-sm text-bone leading-relaxed">
                For more information about how we use personal data, please read our{' '}
                <Link to="/privacy" className="text-lime hover:underline">Privacy Policy</Link>.
                If you have questions about our use of cookies, contact us at{' '}
                <a href="mailto:privacy@sixthledger.com" className="text-lime hover:underline">
                  privacy@sixthledger.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function PreferenceToggle({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  id: string
  label: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between gap-6 bg-coal border border-smoke rounded-sm p-4">
      <div>
        <label htmlFor={id} className="font-body text-sm text-pure font-medium cursor-pointer">
          {label}
        </label>
        <p className="font-body text-xs text-ash mt-0.5">{description}</p>
      </div>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`relative w-10 h-6 rounded-full transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime disabled:opacity-40 disabled:cursor-not-allowed ${
          checked ? 'bg-lime' : 'bg-smoke'
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full transition-transform duration-200 ${
            checked ? 'translate-x-5 bg-obsidian' : 'translate-x-1 bg-ash'
          }`}
          aria-hidden="true"
        />
        <span className="sr-only">{checked ? 'Enabled' : 'Disabled'}</span>
      </button>
    </div>
  )
}
