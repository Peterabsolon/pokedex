import cx from 'classnames'
import { PropsWithChildren, ReactNode } from 'react'

export interface FieldProps {
  className?: string
  name?: string
  label?: ReactNode
}

export const Field = ({ className, children, name, label, ...rest }: FieldProps & PropsWithChildren) => {
  return (
    <div className={cx('flex w-full flex-col', className)} {...rest}>
      <label className="text-md mb-2 block font-medium" htmlFor={name}>
        {label}
      </label>

      <div>{children}</div>

      {/* {error} */}
    </div>
  )
}
