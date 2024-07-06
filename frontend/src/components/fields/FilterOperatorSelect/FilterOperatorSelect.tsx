import { FilterOperator } from '~/codegen/graphql'

import { Select, SelectOption, SelectProps } from '../Select'

export const FILTER_OPERATOR_OPTIONS = Object.entries(FilterOperator).map(([key, value]) => ({
  label: key,
  value: value,
}))

export type FilterOperatorOption = (typeof FILTER_OPERATOR_OPTIONS)[number]

export interface FilterOperatorSelectProps extends SelectProps<SelectOption<FilterOperator>, false, any> {
  value?: SelectOption<FilterOperator> | null
  onChange: (value: SelectOption<FilterOperator> | null) => void
}

export const FilterOperatorSelect = ({ value, onChange, ...props }: FilterOperatorSelectProps) => {
  return (
    <Select<SelectOption<FilterOperator>, false, any>
      {...props}
      value={value}
      options={FILTER_OPERATOR_OPTIONS}
      onChange={onChange}
    />
  )
}
