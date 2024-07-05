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
  /**
   * State
   */
  const [state, setState] = useState(initialState)

  /**
   * Filters
   */
  const type = state.typesSelected.map((opt) => opt.value)
  const typeOperator = state.typeFilterOperator?.value

  const weakness = state.weaknessesSelected.map((opt) => opt.value)
  const weaknessOperator = state.weaknessesFilterOperator?.value

  const resistance = state.resistancesSelected.map((opt) => opt.value)
  const resistanceOperator = state.resistancesFilterOperator?.value

  const filter = useMemo(
    () => ({
      type,
      typeOperator,
      weakness,
      weaknessOperator,
      resistance,
      resistanceOperator,
    }),
    [type, typeOperator, weakness, weaknessOperator, resistance, resistanceOperator],
  )

  /**
   * Queries
   */
  const pokemonsQuery = usePokemonsQuery({
    search: state.searchQuery,
    filter,
  })

  const queries = useMemo(() => ({ pokemonsQuery }), [pokemonsQuery])

  /**
   * Context
   */
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
