import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { usePokemonsQuery } from '~/hooks'

import { createActions, initialState } from './app.store'

const PAGE_SIZE = 20

// ====================================================
// Types
// ====================================================
interface AppContextQueries {
  pokemonsQuery: ReturnType<typeof usePokemonsQuery>
}

interface AppContextComputed {
  pokemons: PokemonInfoFragment[]
  hasMore: boolean
}

interface AppContextType {
  actions: ReturnType<typeof createActions>
  computed: AppContextComputed
  queries: AppContextQueries
  state: typeof initialState
}

// ====================================================
// Context
// ====================================================
const AppContext = createContext<AppContextType>({
  state: initialState,
  actions: createActions(() => {}),
  queries: {} as AppContextQueries,
  computed: {} as AppContextComputed,
})

// ====================================================
// Provider
// ====================================================
export const AppContextProvider = ({ children }: PropsWithChildren) => {
  /**
   * State & Actions
   */
  const [state, setState] = useState(initialState)

  const actions = useMemo(() => createActions(setState), [setState])

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
  const pokemonsQuery = usePokemonsQuery({ search, filter, limit: PAGE_SIZE })

  const queries = useMemo(() => ({ pokemonsQuery }), [pokemonsQuery])

  /**
   * Computed
   */
  const computed = useMemo(() => {
    const hasMore = pokemonsQuery.count ? pokemonsQuery.edges.length < pokemonsQuery.count : true

    return {
      hasMore,
      pokemons: pokemonsQuery.edges.filter((p) => (state.showFavoritesOnly ? p.isFavorite : true)),
    }
  }, [pokemonsQuery, state.showFavoritesOnly])

  const context = useMemo(
    () => ({
      actions,
      computed,
      queries,
      state,
    }),
    [actions, computed, queries, state],
  )

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
