import ReactSelect, { GroupBase, Props as ReactSelectProps } from 'react-select'

import { Field, FieldProps } from '~/components/ui'

export const Select = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  name,
  label,
  ...props
}: ReactSelectProps<Option, IsMulti, Group> & FieldProps) => {
  return (
    <Field name={name} label={label}>
      <ReactSelect<Option, IsMulti, Group> {...props} name={name} />
    </Field>
  )
}

export type SelectProps = React.ComponentProps<typeof Select>
