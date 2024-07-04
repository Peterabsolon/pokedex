import { SelectOption } from '~/components'

export const initialState = {
  pokemonTypes: [] as readonly SelectOption<string>[],
  pokemonTypesSelected: [] as readonly SelectOption<string>[],

  pokemonWeaknesses: [] as readonly SelectOption<string>[],
  pokemonWeaknessesSelected: [] as readonly SelectOption<string>[],

  pokemonResistances: [] as readonly SelectOption<string>[],
  pokemonResistancesSelected: [] as readonly SelectOption<string>[],
}

export const actions = (
  _: typeof initialState,
  setState: React.Dispatch<React.SetStateAction<typeof initialState>>,
) => ({
  setTypes: (pokemonTypes: readonly SelectOption<string>[]) => {
    setState((prev) => ({ ...prev, pokemonTypes }))
  },

  setSelectedTypes: (pokemonTypesSelected: readonly SelectOption<string>[]) => {
    setState((prev) => ({ ...prev, pokemonTypesSelected }))
  },

  setWeaknesses: (pokemonWeaknesses: readonly SelectOption<string>[]) => {
    setState((prev) => ({ ...prev, pokemonWeaknesses }))
  },

  setSelectedWeaknesses: (selectedPokemonWeaknesses: readonly SelectOption<string>[]) => {
    setState((prev) => ({ ...prev, selectedPokemonWeaknesses }))
  },

  setResistances: (pokemonResistances: readonly SelectOption<string>[]) => {
    setState((prev) => ({ ...prev, pokemonResistances }))
  },
})
