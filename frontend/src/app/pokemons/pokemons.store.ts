import { FILTER_OPERATOR_OPTIONS, FilterOperatorOption, SelectOption } from '~/components'

type Options = readonly SelectOption<string>[]

export const initialState = {
  searchQuery: '' as string | undefined,
  showDetailInfo: false,
  showFavoritesOnly: false,

  types: [] as Options,
  typesSelected: [] as Options,
  typeFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorOption | null,

  weaknessesSelected: [] as Options,
  weaknessesFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorOption | null,

  resistancesSelected: [] as Options,
  resistancesFilterOperator: FILTER_OPERATOR_OPTIONS[0] as FilterOperatorOption | null,
}

export type PokemonsState = typeof initialState

export const createActions = (setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  setSearchQuery: (searchQuery?: string) => {
    setState((prev) => ({ ...prev, searchQuery }))
  },

  toggleDetailedInfo: () => {
    setState((prev) => ({ ...prev, showDetailInfo: !prev.showDetailInfo }))
  },

  toggleShowFavoritesOnly: () => {
    setState((prev) => ({ ...prev, showFavoritesOnly: !prev.showFavoritesOnly }))
  },

  setTypes: (types: Options) => {
    setState((prev) => ({ ...prev, types }))
  },

  setTypesSelected: (typesSelected: Options) => {
    setState((prev) => ({ ...prev, typesSelected }))
  },

  setTypeFilterOperator: (typeFilterOperator: FilterOperatorOption | null) => {
    setState((prev) => ({ ...prev, typeFilterOperator }))
  },

  setWeaknessesSelected: (weaknessesSelected: Options) => {
    setState((prev) => ({ ...prev, weaknessesSelected }))
  },

  setWeaknessFilterOperator: (weaknessFilterOperator: FilterOperatorOption | null) => {
    setState((prev) => ({ ...prev, weaknessFilterOperator }))
  },

  setResistancesSelected: (resistancesSelected: Options) => {
    setState((prev) => ({ ...prev, resistancesSelected }))
  },

  setResistancesFilterOperator: (resistancesFilterOperator: FilterOperatorOption | null) => {
    setState((prev) => ({ ...prev, resistancesFilterOperator }))
  },
})
