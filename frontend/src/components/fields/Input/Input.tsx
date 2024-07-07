import classNames from 'classnames'
import { InputHTMLAttributes } from 'react'

import { Field, FieldProps } from '~/components/ui'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldProps {}

export const Input = ({ name, label, className, ...props }: InputProps) => {
  return (
    <Field name={name} label={label}>
      <input
        {...props}
        id={props.id ?? name}
        name={name}
        className={classNames('h-11 w-full rounded border border-slate-300 px-2 py-2 text-black', className)}
      />
    </Field>
  )
}
