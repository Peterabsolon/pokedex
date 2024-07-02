import classNames from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import { observer } from 'mobx-react-lite'

/** TODO: Enable Tailwind VSCode extension setting such that intellisense works outside of JSX */
const levels = {
  info: 'border-blue-600 bg-blue-500',
  success: 'border-green-600 bg-green-500',
  error: 'border-red-600 bg-red-500',
}

export type AlertLevel = keyof typeof levels

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
   *
   */
  motion?: MotionProps
}

export const Alert = observer(({ children, level = 'info', ...props }: AlertProps) => {
  const className = classNames(
    'relative w-full',
    'emboss-effect rounded-xl border p-6 text-white drop-shadow-2xl',
    levels[level],
    props.className,
  )

  const motionProps = props.motion ?? {
    layout: true,
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  }

  const Element = motionProps ? motion.button : ('button' as React.ElementType)

  return (
    <Element className={className} {...motionProps}>
      {children}
    </Element>
  )
})
