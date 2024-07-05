import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { usePokemonsQuery } from '~/hooks'

import { createActions, initialState } from './pokemons.store'

// ====================================================
// Types
// ====================================================
interface PokemonsContextQueries {
  pokemonsQuery: ReturnType<typeof usePokemonsQuery>
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

  const type = state.typesSelected.map((opt) => opt.value)
  const typeOperator = state.typeFilterOperator?.value

  const filter = useMemo(
    () => ({
      type,
      typeOperator,
    }),
    [type, typeOperator],
  )

  const pokemonsQuery = usePokemonsQuery({
    search: state.searchQuery,
    filter,
  })

  const queries = useMemo(() => ({ pokemonsQuery }), [pokemonsQuery])

  const actions = useMemo(() => createActions(setState), [setState])

  const context = useMemo(
    () => ({
      state,
      actions,
      queries,
    }),
    [queries, state, actions],
  )

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
