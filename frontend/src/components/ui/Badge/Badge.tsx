import chroma from 'chroma-js'
import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  color?: string
  onRemove?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const Badge = ({ className, children, color = '#ccc', onClick, onRemove, ...props }: BadgeProps) => {
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
      className={classNames(
        'flex items-center rounded-lg border px-2 py-1 text-sm',
        { 'cursor-pointer': onClick },
        className,
      )}
      onClick={handleClick}
    >
      {children}

      {onRemove && (
        <div className="ml-2 cursor-pointer" onClick={onRemove}>
          x
        </div>
      )}
    </div>
  )
}
