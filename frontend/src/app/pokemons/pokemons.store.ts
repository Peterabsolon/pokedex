export const initialState = {
  pokemonTypes: [] as readonly string[],
  pokemonTypesSelected: [] as readonly string[],

  pokemonWeaknesses: [] as readonly string[],
  pokemonWeaknessesSelected: [] as readonly string[],

  pokemonResistances: [] as readonly string[],
  pokemonResistancesSelected: [] as readonly string[],
}

export const actions = (
  _: typeof initialState,
  setState: React.Dispatch<React.SetStateAction<typeof initialState>>,
) => ({
  setTypes: (pokemonTypes: readonly string[]) => {
    setState((prev) => ({ ...prev, pokemonTypes }))
  },

  setSelectedTypes: (pokemonTypesSelected: readonly string[]) => {
    setState((prev) => ({ ...prev, pokemonTypesSelected }))
  },

  setWeaknesses: (pokemonWeaknesses: readonly string[]) => {
    setState((prev) => ({ ...prev, pokemonWeaknesses }))
  },

  setSelectedWeaknesses: (selectedPokemonWeaknesses: readonly string[]) => {
    setState((prev) => ({ ...prev, selectedPokemonWeaknesses }))
  },

  setResistances: (pokemonResistances: readonly string[]) => {
    setState((prev) => ({ ...prev, pokemonResistances }))
  },
})
