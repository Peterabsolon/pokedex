import { SelectOption } from '~/components'
import { FILTER_OPERATOR_OPTIONS } from '~/constants'

type Options = readonly SelectOption<string>[]
type FilterOperatorOption = (typeof FILTER_OPERATOR_OPTIONS)[0] | null | undefined

export const initialState = {
  searchQuery: '' as string | undefined,
  showDetailInfo: false,

  types: [] as Options,
  typesSelected: [] as Options,
  typeFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorOption,

  weaknesses: [] as Options,
  weaknessesSelected: [] as Options,
  weaknessesFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorOption,

  resistances: [] as Options,
  resistancesSelected: [] as Options,
  resistancesFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorOption,
}

export type PokemonsState = typeof initialState

export const createActions = (setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  setSearchQuery: (searchQuery?: string) => {
    setState((prev) => ({ ...prev, searchQuery }))
  },

  toggleDetailedInfo: () => {
    setState((prev) => ({ ...prev, showDetailInfo: !prev.showDetailInfo }))
  },

  setTypes: (types: Options) => {
    setState((prev) => ({ ...prev, types }))
  },

  setTypesSelected: (typesSelected: Options) => {
    setState((prev) => ({ ...prev, typesSelected }))
  },

  setTypeFilterOperator: (typeFilterOperator: FilterOperatorOption) => {
    console.log({ typeFilterOperator })
    setState((prev) => ({ ...prev, typeFilterOperator }))
  },

  setWeaknesses: (weaknesses: Options) => {
    setState((prev) => ({ ...prev, weaknesses }))
  },

  setWeaknessesSelected: (weaknessesSelected: Options) => {
    setState((prev) => ({ ...prev, weaknessesSelected }))
  },

  setWeaknessFilterOperator: (weaknessFilterOperator: FilterOperatorOption) => {
    setState((prev) => ({ ...prev, weaknessFilterOperator }))
  },

  setResistances: (resistances: Options) => {
    setState((prev) => ({ ...prev, resistances }))
  },

  setResistancesSelected: (resistancesSelected: Options) => {
    setState((prev) => ({ ...prev, resistancesSelected }))
  },

  setResistancesFilterOperator: (resistancesFilterOperator: FilterOperatorOption) => {
    setState((prev) => ({ ...prev, resistancesFilterOperator }))
  },
})
