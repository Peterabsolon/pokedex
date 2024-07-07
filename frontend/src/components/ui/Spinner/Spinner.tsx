import classNames from 'classnames'
import { forwardRef } from 'react'

export interface SpinnerProps {
  className?: string
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ className }, ref) => {
  return (
    <div ref={ref}>
      <img className={classNames('mr-4 w-12 animate-spin', className)} alt="Loading..." src="/pokeball.svg" />
    </div>
  )
})

Spinner.displayName = 'Spinner'
