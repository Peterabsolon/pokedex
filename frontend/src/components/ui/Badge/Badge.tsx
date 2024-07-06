import chroma from 'chroma-js'
import { ReactNode } from 'react'

export interface BadgeProps {
  children: ReactNode
  color?: string
}

export const Badge = ({ children, color = '#ccc' }: BadgeProps) => {
  const colorLighter = chroma.mix(color, '#fff', 0.6).hex()
  const colorText = getContrastingTextColor(colorLighter)

  return (
    <div style={{ color: colorText, borderColor: color, background: colorLighter }} className="rounded-lg border p-2">
      {children}
    </div>
  )
}

const getContrastingTextColor = (hexColor: string) => {
  const whiteContrast = chroma.contrast(hexColor, 'white')
  const blackContrast = chroma.contrast(hexColor, 'black')

  return whiteContrast > blackContrast ? '#ffffff' : '#000000'
}
