import { createContext, PropsWithChildren, useContext, useState } from 'react'

const initialState = {
  pokemonTypes: [] as string[],
}

const actions = (state: typeof initialState, setState: React.Dispatch<React.SetStateAction<typeof initialState>>) => ({
  setTypes: (types: string[]) => {
    setState((prev) => ({ ...prev, pokemonTypes: types }))
  },
})

const PokemonsContext = createContext<{
  state: typeof initialState
  actions: ReturnType<typeof actions>
}>({
  state: initialState,
  actions: actions(initialState, () => {}),
})

export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState)

  return (
    <PokemonsContext.Provider value={{ state, actions: actions(state, setState) }}>{children}</PokemonsContext.Provider>
  )
}

export const usePokemonsContext = () => useContext(PokemonsContext)
