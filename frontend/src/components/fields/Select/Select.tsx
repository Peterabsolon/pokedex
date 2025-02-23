import { useId } from 'react'
import ReactSelect, { components, GroupBase, Props as ReactSelectProps } from 'react-select'

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
    FieldProps {
  fieldClassName?: string
}

export const Select = <
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  name,
  label,
  isSearchable = true,
  fieldClassName,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  const id = props.id ?? name

  return (
    <Field name={name} label={label} data-testid={id} className={fieldClassName}>
      <ReactSelect<Option, IsMulti, Group>
        {...props}
        id={id}
        name={name}
        instanceId={useId()}
        isSearchable={isSearchable}
        closeMenuOnSelect={!props.isMulti}
        classNames={{
          control: () => '!border-slate-300',
          input: () => 'h-9',
          placeholder: () => '!text-slate-400',
        }}
        components={
          props.components ?? {
            Option: (props) => (
              <div data-testid="react-select-option">
                <components.Option {...props} />
              </div>
            ),
          }
        }
      />
    </Field>
  )
}
