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
  const search = state.searchQuery
  const isFavorite = state.showFavoritesOnly

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
      isFavorite,
    }),
    [type, typeOperator, weakness, weaknessOperator, resistance, resistanceOperator, isFavorite],
  )

  /**
   * Queries
   */
  const pokemonsQuery = usePokemonsQuery({ search, filter })

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
