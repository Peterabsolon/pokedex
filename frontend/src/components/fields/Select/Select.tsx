'use client'

import { useId } from 'react'
import ReactSelect, { GroupBase, Props as ReactSelectProps } from 'react-select'

import { Field, FieldProps } from '~/components/ui'

export interface SelectOption<T = string | number> {
  label: string
  value: T
}

export interface SelectProps<
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends ReactSelectProps<Option, IsMulti, Group>,
    FieldProps {}

export const Select = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  name,
  label,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  return (
    <Field name={name} label={label}>
      <ReactSelect<Option, IsMulti, Group> {...props} name={name} instanceId={useId()} />
    </Field>
  )
}
