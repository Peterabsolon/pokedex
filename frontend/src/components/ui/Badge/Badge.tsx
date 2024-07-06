import chroma from 'chroma-js'
import { HTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  color?: string
}

export const Badge = ({ children, color = '#ccc', ...props }: BadgeProps) => {
  const colorLighter = chroma.mix(color, '#fff', 0.6).hex()
  const colorText = getContrastingTextColor(colorLighter)

  return (
    <div
      style={{ color: colorText, borderColor: color, background: colorLighter }}
      className="rounded-lg border px-2 py-1 text-sm"
      {...props}
    >
      {children}
    </div>
  )
}

const getContrastingTextColor = (hexColor: string) => {
  const whiteContrast = chroma.contrast(hexColor, 'white')
  const blackContrast = chroma.contrast(hexColor, 'black')

  return whiteContrast > blackContrast ? '#ffffff' : '#000000'
}
