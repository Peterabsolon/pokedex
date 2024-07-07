import { keyBy } from 'lodash'
import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { usePokemonByNameQuery, usePokemonsQuery } from '~/hooks'

import { createActions, initialState } from './pokemons.store'

const PAGE_SIZE = 20

// ====================================================
// Types
// ====================================================
export type PokemonsByIdMap = {
  [id: string]: PokemonInfoFragment
}

interface PokemonsContextQueries {
  pokemonsQuery: ReturnType<typeof usePokemonsQuery>
  pokemonByNameQuery: ReturnType<typeof usePokemonByNameQuery>
}

interface PokemonsContextComputed {
  hasMore: boolean
  pokemonsById: PokemonsByIdMap
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
  const pokemonsQuery = usePokemonsQuery({ search, filter, limit: PAGE_SIZE })
  const pokemonByNameQuery = usePokemonByNameQuery({ name: state.openedPokemonName })

  const queries = useMemo(
    () => ({
      pokemonsQuery,
      pokemonByNameQuery,
    }),
    [pokemonsQuery, pokemonByNameQuery],
  )

  /**
   * Computed
   */
  const computed = useMemo(() => {
    const hasMore = pokemonsQuery.count ? pokemonsQuery.edges.length < pokemonsQuery.count : true

    return {
      hasMore,
      pokemonsById: keyBy(pokemonsQuery.edges, 'id'),
    }
  }, [pokemonsQuery])

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
