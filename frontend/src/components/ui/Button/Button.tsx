import classNames from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'

export const DEFAULT_BUTTON_MOTION: MotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export type ButtonVariant = keyof typeof variantStyles

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button label.
   * Optional, uses children if not passed.
   */
  label?: string

  /**
   * The button color variant.
   * @default 'primary'
   */
  variant?: ButtonVariant

  /**
   * The button color variant to use when hovered
   */
  variantHover?: ButtonVariant

  /**
   * The icon rendered on the left side of the label
   */
  iconLeft?: ReactNode

  /**
   * The icon rendered on the right side of the label
   */
  iconRight?: ReactNode

  /**
   * Props for animating with framer-motion
   */
  motion?: MotionProps

  /**
   * If true, the onClick event is not propagated
   */
  stopPropagation?: boolean
}

export const Button = ({
  children,
  label,
  variant = 'primary',
  variantHover,
  className,
  iconLeft,
  iconRight,
  onClick,
  stopPropagation,
  ...props
}: ButtonProps) => {
  const motionProps = props.motion ?? DEFAULT_BUTTON_MOTION
  const Element = motionProps ? motion.button : ('button' as ElementType)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (stopPropagation) {
      e.stopPropagation()
    }

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Element
      {...props}
      {...motionProps}
      onClick={handleClick}
      className={classNames(
        // https://github.com/mdn/browser-compat-data/issues/17726
        // Tailwind shadows use some unsupported Safari API, force use GPU to fix perf issues
        'transform-gpu drop-shadow-2xl',
        'relative flex flex-row items-center justify-center text-nowrap rounded-md px-8 py-2',
        'font-medium transition-colors disabled:cursor-not-allowed',
        {
          // 'emboss-effect': variant !== 'text',
          'pl-6': iconLeft && !className,
          'pr-6': iconRight && !className,
        },
        variantStyles[variant],
        variantHoverStyles[variantHover ?? variant],
        className,
      )}
    >
      {iconLeft}
      <span>{label || children}</span>
      {iconRight}
    </Element>
  )
}

const variantStyles = {
  text: '',
  primary: 'text-white bg-blue-500',
  secondary: 'text-white border border-blue-400 bg-slate-900 disabled:opacity-60',
  danger: 'text-white bg-red-600',
}

const variantHoverStyles = {
  text: 'hover:bg-blue-400',
  primary: 'hover:bg-blue-400',
  secondary: 'hover:bg-blue-400 disabled:hover:bg-slate-900',
  danger: 'hover:bg-red-500 hover:border-red-800',
}
