'use client'

import classNames from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import { observer } from 'mobx-react-lite'

const DEFAULT_MOTION = {
  layout: true,
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
}

export type AlertLevel = keyof typeof levelStyles

export interface AlertProps {
  /**
   * Root element className
   */
  className?: string

  /**
   * The alert level
   */
  level: AlertLevel

  /**
   * The message rendered
   */
  children: React.ReactNode

  /**
   * Props for animating with framer-motion
   */
  motion?: MotionProps
}

export const Alert = observer(({ children, level = 'info', ...props }: AlertProps) => {
  const motionProps = props.motion ?? DEFAULT_MOTION
  const Element = motionProps ? motion.button : ('button' as React.ElementType)

  return (
    <Element
      {...motionProps}
      className={classNames(
        'emboss-effect relative w-full rounded-xl border p-6 text-white drop-shadow-2xl',
        levelStyles[level],
        props.className,
      )}
    >
      {children}
    </Element>
  )
})

const levelStyles = {
  info: 'border-blue-600 bg-blue-500',
  success: 'border-green-600 bg-green-500',
  error: 'border-red-600 bg-red-500',
}
