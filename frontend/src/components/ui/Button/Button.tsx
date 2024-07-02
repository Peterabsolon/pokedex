'use client'

import cx from 'classnames'
import { motion, MotionProps } from 'framer-motion'
import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'danger'

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
}

/** TODO: Enable Tailwind VSCode extension setting such that intellisense works outside of JSX */
const variants: { [key in ButtonVariant]: string } = {
  text: '',
  primary: 'bg-blue-500',
  secondary: 'border border-blue-400 bg-slate-900 disabled:opacity-60',
  danger: 'bg-red-600',
}

const variantsHover: { [key in ButtonVariant]: string } = {
  text: 'hover:bg-blue-400',
  primary: 'hover:bg-blue-400',
  secondary: 'hover:bg-blue-400 disabled:hover:bg-slate-900',
  danger: 'hover:bg-red-500 hover:border-red-800',
}

export const Button = ({
  children,
  label,
  variant = 'primary',
  variantHover,
  className,
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) => {
  const motionProps = props.motion ?? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  }

  const ButtonElement = motionProps ? motion.button : ('button' as ElementType)
  const hoverVariant = variantsHover[variantHover || variant]

  return (
    <ButtonElement
      {...props}
      {...motionProps}
      className={cx(
        'flex flex-row items-center justify-center',
        'relative rounded-md px-8 py-2 font-medium drop-shadow-2xl transition-colors',
        'disabled:cursor-not-allowed',
        'text-nowrap',
        {
          'pl-6': iconLeft,
          'pr-6': iconRight,
          'emboss-effect': variant !== 'text',
        },
        variants[variant],
        hoverVariant,
        className,
      )}
    >
      {iconLeft}
      <span>{label || children}</span>
      {iconRight}
    </ButtonElement>
  )
}
