import cx from 'classnames'

import { Field, FieldProps } from '~/components/ui'

import { SelectOption } from './SelectOption'

export interface SelectProps<T extends string> extends Omit<FieldProps, 'children'> {
  className?: string
  options: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
}

export const Select = <T extends string>({ className, options, value, onChange, name, label }: SelectProps<T>) => {
  return (
    <Field name={name} label={label}>
      <div className={cx('flex', className)}>
        {options.map((option) => (
          <SelectOption key={option.value} option={option} onSelect={onChange} value={value} />
        ))}
      </div>
    </Field>
  )
}
