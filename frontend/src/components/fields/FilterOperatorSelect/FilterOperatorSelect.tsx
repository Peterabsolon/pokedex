import { FilterOperator } from '~/codegen/graphql'
import { FILTER_OPERATOR_OPTIONS } from '~/constants'

import { Select, SelectOption } from '../Select'

export interface FilterOperatorSelectProps {
  value?: SelectOption<FilterOperator> | null
  onChange: (value: SelectOption<FilterOperator> | null) => void
}

export const FilterOperatorSelect = ({ value, onChange }: FilterOperatorSelectProps) => {
  return (
    <Select<SelectOption<FilterOperator>, false, any>
      value={value}
      options={FILTER_OPERATOR_OPTIONS}
      onChange={onChange}
    />
  )
}
