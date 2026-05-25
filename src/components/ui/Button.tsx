import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
  'aria-label'?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-3 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-lime text-obsidian hover:bg-lime-deep active:scale-95',
    ghost:
      'bg-transparent text-bone border border-smoke hover:border-lime hover:text-pure active:scale-95',
    outline:
      'bg-transparent text-lime border border-lime hover:bg-lime hover:text-obsidian active:scale-95',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2 rounded-sm',
    md: 'text-sm px-6 py-3 rounded-sm tracking-wide',
    lg: 'text-base px-8 py-4 rounded-sm tracking-wide',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
