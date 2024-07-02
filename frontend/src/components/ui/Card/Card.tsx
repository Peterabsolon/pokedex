import cx from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import { observer } from 'mobx-react-lite'
import { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Should animate appearance
   */
  animate?: boolean

  /**
   * The content
   */
  children: ReactNode

  /**
   * Props for animating with framer-motion
   */
  motion?: MotionProps
}

export const Card = observer(({ animate = true, children, className, onClick, style, ...props }: CardProps) => {
  const motionProps = props.motion ?? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  const Element = motionProps ? motion.div : ('div' as React.ElementType)

  return (
    <Element
      className={cx(
        'emboss-effect relative rounded-xl bg-slate-900 p-8 drop-shadow-2xl transition-colors',
        { 'animate-appear': animate },
        className,
      )}
      onClick={onClick}
      style={style}
      {...motionProps}
    >
      {children}
    </Element>
  )
})
