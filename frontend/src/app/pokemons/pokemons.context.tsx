import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { actions, initialState } from './pokemons.store'

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
