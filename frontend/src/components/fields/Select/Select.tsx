import ReactSelect, { GroupBase, Props as ReactSelectProps } from 'react-select'

import { Field, FieldProps } from '~/components/ui'

export type { ReactSelectProps as SelectProps }

interface SelectPropsExtra extends FieldProps {}

export const Select = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  name,
  label,
  ...props
}: ReactSelectProps<Option, IsMulti, Group> & SelectPropsExtra) => {
  return (
    <Field name={name} label={label}>
      <ReactSelect {...props} name={name} />
    </Field>
  )
}
