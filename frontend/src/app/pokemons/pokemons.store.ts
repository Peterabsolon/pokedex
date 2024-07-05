import { SelectOption } from '~/components'
import { FILTER_OPERATOR_OPTIONS } from '~/constants'

type Options = readonly SelectOption<string>[]
type FilterOperatorState = (typeof FILTER_OPERATOR_OPTIONS)[0] | null | undefined

// TODO: store as strings only, add/use onValueChange to <Select />
export const initialState = {
  searchQuery: '' as string | undefined,

  types: [] as Options,
  typesSelected: [] as Options,
  typeFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorState,

  weaknesses: [] as Options,
  weaknessesSelected: [] as Options,
  weaknessesFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorState,

  resistances: [] as Options,
  resistancesSelected: [] as Options,
  resistancesFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorState,
}

export type PokemonsState = typeof initialState

export const createActions = (setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  setSearchQuery: (searchQuery?: string) => {
    setState((prev) => ({ ...prev, searchQuery }))
  },

  setTypes: (types: Options) => {
    setState((prev) => ({ ...prev, types }))
  },

  setTypesSelected: (typesSelected: Options) => {
    setState((prev) => ({ ...prev, typesSelected }))
  },

  setTypeFilterOperator: (typeFilterOperator: FilterOperatorState) => {
    console.log({ typeFilterOperator })
    setState((prev) => ({ ...prev, typeFilterOperator }))
  },

  setWeaknesses: (weaknesses: Options) => {
    setState((prev) => ({ ...prev, weaknesses }))
  },

  setWeaknessesSelected: (weaknessesSelected: Options) => {
    setState((prev) => ({ ...prev, weaknessesSelected }))
  },

  setWeaknessFilterOperator: (weaknessFilterOperator: FilterOperatorState) => {
    setState((prev) => ({ ...prev, weaknessFilterOperator }))
  },

  setResistances: (resistances: Options) => {
    setState((prev) => ({ ...prev, resistances }))
  },

  setResistancesSelected: (resistancesSelected: Options) => {
    setState((prev) => ({ ...prev, resistancesSelected }))
  },

  setResistancesFilterOperator: (resistancesFilterOperator: FilterOperatorState) => {
    setState((prev) => ({ ...prev, resistancesFilterOperator }))
  },
})
