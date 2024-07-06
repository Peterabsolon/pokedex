import cx from 'classnames'
import { InputHTMLAttributes } from 'react'

import { Field, FieldProps } from '~/components/ui'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldProps {}

export const Input = ({ name, label, className, ...props }: InputProps) => {
  return (
    <Field name={name} label={label}>
      <input {...props} id={props.id ?? name} name={name} className={cx('border border-black text-black', className)} />
    </Field>
  )
}
