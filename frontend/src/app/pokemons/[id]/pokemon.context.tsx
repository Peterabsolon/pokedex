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
  actions: ReturnType<typeof createActions>
  queries: PokemonsContextQueries
  state: typeof initialState
}

// ====================================================
// Context
// ====================================================
const PokemonsContext = createContext<PokemonsContextType>({
  actions: createActions(() => {}),
  queries: {} as PokemonsContextQueries,
  state: initialState,
})

// ====================================================
// Provider
// ====================================================
export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState)

  const pokemonQuery = usePokemonByIdQuery({ id: state.pokemonId })

  const queries = useMemo(() => ({ pokemonQuery }), [pokemonQuery])

  const actions = useMemo(() => createActions(setState), [setState])

  const computed = useMemo(
    () => ({
      pokemonsByNumber: {},
    }),
    [],
  )

  const context = useMemo(
    () => ({
      actions,
      computed,
      state,
      queries,
    }),
    [state, actions, queries, computed],
  )

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
