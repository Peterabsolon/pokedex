'use client'

import cx from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { HTMLAttributes, ReactNode } from 'react'

const DEFAULT_MOTION: MotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  initial: { scale: 0.9, opacity: 0, y: 20 },
  animate: { scale: 1, opacity: 1, y: 0 },
  exit: { scale: 0.8, opacity: 0, y: -10 },
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content
   */
  children: ReactNode

  /**
   * Props for animating with framer-motion
   */
  motion?: MotionProps
}

export const Card = observer(({ children, className, onClick, style, ...props }: CardProps) => {
  const motionProps = props.motion ?? DEFAULT_MOTION
  const Element = motionProps ? motion.div : ('div' as React.ElementType)

  return (
    <Element
      className={cx('emboss-effect relative rounded-xl bg-slate-900 p-8 drop-shadow-2xl transition-colors', className)}
      onClick={onClick}
      style={style}
      {...motionProps}
    >
      {children}
    </Element>
  )
})
