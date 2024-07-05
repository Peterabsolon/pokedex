export const initialState = {
  pokemonId: undefined as string | undefined,
}

export type PokemonsState = typeof initialState

export const createActions = (setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  setPokemonId: (pokemonId: string) => {
    setState((prev) => ({ ...prev, pokemonId }))
  },
})
