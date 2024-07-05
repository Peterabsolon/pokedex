'use client'

import cx from 'classnames'
import { PropsWithChildren, ReactNode } from 'react'

export interface FieldProps {
  className?: string
  name?: string
  label?: ReactNode
}

export const Field = ({ className, children, name, label }: FieldProps & PropsWithChildren) => {
  return (
    <div className={cx('flex w-full flex-col', className)}>
      <label className="mb-2 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>

      <div>{children}</div>

      {/* {error} */}
    </div>
  )
}
