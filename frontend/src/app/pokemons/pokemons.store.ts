import { SelectOption } from '~/components'

type Options = readonly SelectOption<string>[]

// TODO: store as strings only, add/use onValueChange to <Select />
export const initialState = {
  searchQuery: '',

  types: [] as Options,
  typesSelected: [] as Options,

  weaknesses: [] as Options,
  weaknessesSelected: [] as Options,

  resistances: [] as Options,
  resistancesSelected: [] as Options,
}

export type PokemonsState = typeof initialState

export const actions = (_: PokemonsState, setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  setSearchQuery: (searchQuery: string) => {
    setState((prev) => ({ ...prev, searchQuery }))
  },

  setTypes: (types: Options) => {
    setState((prev) => ({ ...prev, types }))
  },

  setTypesSelected: (typesSelected: Options) => {
    setState((prev) => ({ ...prev, typesSelected }))
  },

  setWeaknesses: (weaknesses: Options) => {
    setState((prev) => ({ ...prev, weaknesses }))
  },

  setWeaknessesSelected: (weaknessesSelected: Options) => {
    setState((prev) => ({ ...prev, weaknessesSelected }))
  },

  setResistances: (resistances: Options) => {
    setState((prev) => ({ ...prev, resistances }))
  },

  setResistancesSelected: (resistancesSelected: Options) => {
    setState((prev) => ({ ...prev, resistancesSelected }))
  },
})
