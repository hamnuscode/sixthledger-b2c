import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-coal border-t border-smoke" role="contentinfo">
      <div className="container">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-16">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" aria-label="Sixth Ledger, Home" className="inline-block mb-4">
              <img
                src="/logo-black.png"
                alt="Sixth Ledger"
                className="h-7 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-bone text-sm leading-relaxed mb-4">
              ACCA-led accounting for UK sole traders, freelancers, and small businesses.
              ICO-registered. UK GDPR compliant.
            </p>
            <p className="font-mono text-xs text-ash uppercase tracking-label">
              ICO Reg:{' '}
              <a
                href="https://ico.org.uk/ESDWebPages/Entry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime hover:underline"
              >
                ZA (pending)
              </a>
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-mono text-xs text-ash uppercase tracking-label mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-bone text-sm hover:text-lime transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Services */}
          <div>
            <h3 className="font-mono text-xs text-ash uppercase tracking-label mb-5">
              &nbsp;
            </h3>
            <ul className="space-y-2.5 mt-0">
              {services.slice(5).map(service => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-bone text-sm hover:text-lime transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="font-mono text-xs text-ash uppercase tracking-label mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { to: '/about', label: 'About us' },
                { to: '/compliance', label: 'Compliance' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/contact', label: 'Contact' },
              ].map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-bone text-sm hover:text-lime transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="font-mono text-xs text-ash uppercase tracking-label mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@sixthledger.com"
                  className="text-bone text-sm hover:text-lime transition-colors"
                >
                  info@sixthledger.com
                </a>
              </li>

              <li>
                <address className="text-ash text-xs not-italic leading-relaxed">
                  Islamabad, Pakistan
                </address>
              </li>
              <li className="pt-1">
                <a
                  href="https://linkedin.com/company/sixthledger"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sixth Ledger on LinkedIn"
                  className="inline-flex items-center gap-2 text-ash hover:text-lime transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-smoke py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ash text-xs">
            © {year} SIXTHLEDGER (PVT) LTD. Designed for UK small businesses.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex items-center gap-5">
              <li>
                <a href="https://drive.google.com/drive/folders/1FQoRnfnJvz4Ctc_RhHTjiYUhzJZW5bRX?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-ash text-xs hover:text-lime transition-colors">Privacy Policy</a>
              </li>
              <li>
                <Link to="/terms" className="text-ash text-xs hover:text-lime transition-colors">Terms</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-ash text-xs hover:text-lime transition-colors">Cookies</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
