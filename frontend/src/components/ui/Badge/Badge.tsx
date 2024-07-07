import chroma from 'chroma-js'
import { HTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  color?: string
}

export const Badge = ({ children, color = '#ccc', onClick, ...props }: BadgeProps) => {
  const colorLighter = chroma.mix(color, '#fff', 0.6).hex()
  const colorDarker = chroma.mix(color, '#000', 0.6).hex()

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      event.stopPropagation()
      onClick(event)
    }
  }

  return (
    <div
      {...props}
      style={{ color: colorDarker, borderColor: color, background: colorLighter }}
      className="rounded-lg border px-2 py-1 text-sm"
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
