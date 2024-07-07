import classNames from 'classnames'

import { Field, FieldProps } from '~/components/ui'

import { ButtonSelectOption } from './ButtonSelectOption'

export interface ButtonSelectProps<T extends string> extends Omit<FieldProps, 'children'> {
  className?: string
  options: ButtonSelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
}

export const ButtonSelect = <T extends string>({
  className,
  options,
  value,
  onChange,
  name,
  label,
}: ButtonSelectProps<T>) => {
  return (
    <Field name={name} label={label}>
      <div className={classNames('flex', className)}>
        {options.map((option) => (
          <ButtonSelectOption key={option.value} option={option} onSelect={onChange} value={value} />
        ))}
      </div>
    </Field>
  )
}
