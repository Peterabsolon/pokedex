import { FilterOperator } from '~/codegen/graphql'

export const FILTER_OPERATOR_OPTIONS = Object.entries(FilterOperator).map(([key, value]) => ({
  label: key,
  value: value,
}))
