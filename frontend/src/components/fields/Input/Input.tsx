import { InputHTMLAttributes } from 'react'

import { Field, FieldProps } from '~/components/ui'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldProps {
  foo?: string
}

export const Input = ({ name, label, ...props }: InputProps) => {
  return (
    <Field name={name} label={label}>
      <input className="border border-black text-black" {...props} />
    </Field>
  )
}
