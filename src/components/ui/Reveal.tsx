import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

const UP: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const FADE: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const SCALE: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

const EASE = [0.16, 1, 0.3, 1] as const

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  type?: 'up' | 'fade' | 'scale'
  as?: keyof JSX.IntrinsicElements
}

export function Reveal({ children, delay = 0, duration = 0.65, className, type = 'up', as }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const reduced = useReducedMotion()
  const variants = type === 'fade' ? FADE : type === 'scale' ? SCALE : UP

  const Comp = (as ? motion[as as 'div'] : motion.div) as typeof motion.div

  return (
    <Comp
      ref={ref}
      variants={reduced ? {} : variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}

interface StaggerProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
}

export function Stagger({ children, className, delay = 0, stagger = 0.08 }: StaggerProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const reduced = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export const itemFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const itemScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}
