import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { usePokemonByIdQuery } from '~/hooks'

import { actions, initialState } from './pokemon.store'

// ====================================================
// Types
// ====================================================
interface PokemonsContextQueries {
  pokemonQuery: ReturnType<typeof usePokemonByIdQuery>
}

interface PokemonsContextType {
  state: typeof initialState
  actions: ReturnType<typeof actions>
  queries: PokemonsContextQueries
}

// ====================================================
// Context
// ====================================================
const PokemonsContext = createContext<PokemonsContextType>({
  state: initialState,
  actions: actions(initialState, () => {}),
  queries: {} as PokemonsContextQueries,
})

// ====================================================
// Provider
// ====================================================
export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState)

  const pokemonQuery = usePokemonByIdQuery()

  const queries = {
    pokemonQuery,
  }

  const context = {
    state,
    actions: actions(state, setState),
    queries,
  }

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
