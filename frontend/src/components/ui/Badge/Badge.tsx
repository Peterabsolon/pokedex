import chroma from 'chroma-js'

export interface BadgeProps {
  color?: string
}

export const Badge = ({ color = '#ccc' }: BadgeProps) => {
  const colorLighter = chroma.mix(color, '#fff', 0.6).hex()
  const colorText = getContrastingTextColor(color)

  return (
    <div style={{ color: colorText, borderColor: color, background: colorLighter }} className="rounded-lg border p-2">
      Badge
    </div>
  )
}

const getContrastingTextColor = (hexColor: string) => {
  const whiteContrast = chroma.contrast(hexColor, 'white')
  const blackContrast = chroma.contrast(hexColor, 'black')

  return whiteContrast > blackContrast ? '#ffffff' : '#000000'
}
