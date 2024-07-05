export const initialState = {}

export type PokemonsState = typeof initialState

export const actions = (_: PokemonsState, setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  // setSearchQuery: (searchQuery: string) => {
  //   setState((prev) => ({ ...prev, searchQuery }))
  // },
})
