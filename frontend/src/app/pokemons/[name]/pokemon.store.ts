export const initialState = {
  pokemonName: undefined as string | undefined,
}

export type PokemonsState = typeof initialState

export const createActions = (setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  setPokemonName: (pokemonName: string) => {
    setState((prev) => ({ ...prev, pokemonName }))
  },
})
