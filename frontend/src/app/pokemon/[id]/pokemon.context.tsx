import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { usePokemonByIdQuery } from '~/hooks'

import { createActions, initialState } from './pokemon.store'

// ====================================================
// Types
// ====================================================
interface PokemonsContextQueries {
  pokemonQuery: ReturnType<typeof usePokemonByIdQuery>
}

interface PokemonsContextType {
  state: typeof initialState
  actions: ReturnType<typeof createActions>
  queries: PokemonsContextQueries
}

// ====================================================
// Context
// ====================================================
const PokemonsContext = createContext<PokemonsContextType>({
  state: initialState,
  actions: createActions(() => {}),
  queries: {} as PokemonsContextQueries,
})

// ====================================================
// Provider
// ====================================================
export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState)

  const pokemonQuery = usePokemonByIdQuery()

  const queries = useMemo(() => ({ pokemonQuery }), [pokemonQuery])

  const actions = useMemo(() => createActions(setState), [setState])

  const context = useMemo(
    () => ({
      state,
      actions,
      queries,
    }),
    [state, actions, queries],
  )

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
