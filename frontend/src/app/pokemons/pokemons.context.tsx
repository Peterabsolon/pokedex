import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'

import { usePokemonsQuery } from '~/hooks'

import { actions, initialState } from './pokemons.store'

// ====================================================
// Types
// ====================================================
interface PokemonsContextQueries {
  pokemonsQuery: ReturnType<typeof usePokemonsQuery>
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
  actions: actions(() => {}),
  queries: {} as PokemonsContextQueries,
})

// ====================================================
// Provider
// ====================================================
export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(initialState)

  const filter = useMemo(
    () => ({
      type: state.typesSelected[0]?.value,
    }),
    [state],
  )

  const pokemonsQuery = usePokemonsQuery({
    search: state.searchQuery,
    filter,
  })

  const queries = useMemo(() => ({ pokemonsQuery }), [pokemonsQuery])

  const actionsMemo = useMemo(() => actions(setState), [setState])

  const setSearchQuery = useCallback((searchQuery?: string) => {
    setState((prev) => ({ ...prev, searchQuery }))
  }, [])

  const context = useMemo(
    () => ({
      state,
      actions: actionsMemo,
      queries,
    }),
    [queries, state, actionsMemo],
  )

  console.log('context')

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
