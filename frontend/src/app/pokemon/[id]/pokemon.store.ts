export const initialState = {}

export type PokemonsState = typeof initialState

export const createActions = (setState: React.Dispatch<React.SetStateAction<PokemonsState>>) => ({
  // setSearchQuery: (searchQuery: string) => {
  //   setState((prev) => ({ ...prev, searchQuery }))
  // },
})
