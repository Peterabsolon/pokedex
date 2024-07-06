import { keyBy } from 'lodash'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { usePokemonsQuery } from '~/hooks'

import { createActions, initialState } from './pokemons.store'

// ====================================================
// Types
// ====================================================
export type PokemonsByNumberMap = {
  [key: number]: PokemonInfoFragment
}

interface PokemonsContextQueries {
  pokemonsQuery: ReturnType<typeof usePokemonsQuery>
}

interface PokemonsContextComputed {
  pokemonsByNumber: PokemonsByNumberMap
}

interface PokemonsContextType {
  actions: ReturnType<typeof createActions>
  computed: PokemonsContextComputed
  queries: PokemonsContextQueries
  state: typeof initialState
}

// ====================================================
// Context
// ====================================================
const PokemonsContext = createContext<PokemonsContextType>({
  state: initialState,
  actions: createActions(() => {}),
  queries: {} as PokemonsContextQueries,
  computed: {} as PokemonsContextComputed,
})

// ====================================================
// Provider
// ====================================================
export const PokemonsContextProvider = ({ children }: PropsWithChildren) => {
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
  const pokemonsQuery = usePokemonsQuery({ search, filter })

  const queries = useMemo(() => ({ pokemonsQuery }), [pokemonsQuery])

  /**
   * Computed
   */
  const computed = useMemo(
    () => ({
      pokemonsByNumber: keyBy(pokemonsQuery.pokemons, 'number'),
    }),
    [pokemonsQuery.pokemons],
  )

  const context = useMemo(
    () => ({
      actions,
      computed,
      queries,
      state,
    }),
    [actions, computed, queries, state],
  )

  return <PokemonsContext.Provider value={context}>{children}</PokemonsContext.Provider>
}

export const usePokemonsContext = () => useContext(PokemonsContext)
