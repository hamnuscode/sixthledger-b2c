import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { services } from '../../data/services'
import Button from '../ui/Button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body text-sm font-medium transition-colors duration-150 ${
      isActive ? 'text-lime' : 'text-bone hover:text-pure'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-coal border-b border-smoke' : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label="Sixth Ledger, Home"
          >
            <img
              src="/logo-black.png"
              alt="Sixth Ledger"
              className="h-7 md:h-8 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Main navigation">
            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`font-body text-sm font-medium transition-colors duration-150 flex items-center gap-1.5 ${
                  servicesOpen ? 'text-lime' : 'text-bone hover:text-pure'
                }`}
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-coal border border-smoke rounded-sm shadow-xl py-2"
                    role="menu"
                  >
                    {services.map(service => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-smoke transition-colors group"
                        role="menuitem"
                      >
                        <span className="font-mono text-xs text-ash group-hover:text-lime transition-colors">
                          {service.number}
                        </span>
                        <span className="font-body text-sm text-bone group-hover:text-pure transition-colors">
                          {service.title}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/compliance" className={navLinkClass}>Compliance</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button to="/contact" size="sm">
              Book a free consultation
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-bone transition-all duration-200 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-bone transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-bone transition-all duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-16 bg-coal border-t border-smoke overflow-y-auto z-40"
          >
            <div className="container py-8 flex flex-col gap-1">
              <p className="eyebrow text-ash mb-4">Navigation</p>

              <MobileNavLink to="/" label="Home" />

              <div className="border-b border-smoke pb-4 mb-4">
                <p className="eyebrow text-ash text-xs mb-3 mt-4">Services</p>
                {services.map(service => (
                  <MobileNavLink
                    key={service.id}
                    to={`/services/${service.id}`}
                    label={service.title}
                    sub={service.number}
                  />
                ))}
              </div>

              <MobileNavLink to="/pricing" label="Pricing" />
              <MobileNavLink to="/about" label="About" />
              <MobileNavLink to="/compliance" label="Compliance" />
              <MobileNavLink to="/contact" label="Contact" />

              <div className="mt-6">
                <Button to="/contact" size="md" className="w-full">
                  Book a free consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileNavLink({ to, label, sub }: { to: string; label: string; sub?: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-3 rounded-sm transition-colors ${
          isActive ? 'bg-smoke text-lime' : 'text-bone hover:bg-smoke hover:text-pure'
        }`
      }
    >
      {sub && (
        <span className="font-mono text-xs text-ash w-6 flex-shrink-0">{sub}</span>
      )}
      <span className="font-body font-medium">{label}</span>
    </NavLink>
  )
}
