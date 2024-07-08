import { uniqBy } from 'lodash'

import { FILTER_OPERATOR_OPTIONS, FilterOperatorOption } from '~/components/fields/FilterOperatorSelect'
import { SelectOption } from '~/components/fields/Select'

type Option = SelectOption<string>
type Options = readonly Option[]

const useTableView = typeof window === 'undefined' ? false : localStorage.getItem('useTableView') === 'true'

export const initialState = {
  openedPokemonName: undefined as string | undefined,

  searchQuery: '' as string | undefined,

  useTableView,
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

  toggleTableView: () => {
    setState((prev) => {
      localStorage.setItem('useTableView', (!prev.useTableView).toString())
      return { ...prev, useTableView: !prev.useTableView }
    })
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

  addTypeSelected: (typeSelected: Option) => {
    setState((prev) => ({ ...prev, typesSelected: uniqBy([...prev.typesSelected, typeSelected], 'value') }))
  },

  setTypeFilterOperator: (typeFilterOperator: FilterOperatorOption | null) => {
    setState((prev) => ({ ...prev, typeFilterOperator }))
  },

  setWeaknessesSelected: (weaknessesSelected: Options) => {
    setState((prev) => ({ ...prev, weaknessesSelected }))
  },

  addWeaknessSelected: (weaknessSelected: Option) => {
    setState((prev) => ({
      ...prev,
      weaknessesSelected: uniqBy([...prev.weaknessesSelected, weaknessSelected], 'value'),
    }))
  },

  setWeaknessFilterOperator: (weaknessFilterOperator: FilterOperatorOption | null) => {
    setState((prev) => ({ ...prev, weaknessFilterOperator }))
  },

  setResistancesSelected: (resistancesSelected: Options) => {
    setState((prev) => ({ ...prev, resistancesSelected }))
  },

  addResistanceSelected: (resistanceSelected: Option) => {
    setState((prev) => ({
      ...prev,
      resistancesSelected: uniqBy([...prev.resistancesSelected, resistanceSelected], 'value'),
    }))
  },

  setResistancesFilterOperator: (resistancesFilterOperator: FilterOperatorOption | null) => {
    setState((prev) => ({ ...prev, resistancesFilterOperator }))
  },
})
