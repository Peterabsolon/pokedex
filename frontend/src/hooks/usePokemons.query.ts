import { FieldPolicy, useApolloClient, useQuery } from '@apollo/client'
import { debounce, defaults, uniqBy } from 'lodash'
import { useMemo } from 'react'

import { GetPokemonsQuery, PokemonConnection, PokemonsQueryInput } from '~/codegen/graphql'
import { GET_POKEMONS_QUERY } from '~/graphql'

// Add slight delay for fetching more results to simulate real client <=> server trip
const DEBOUNCE_MS = 250

// ====================================================
// Hook
// ====================================================
export const usePokemonsQuery = (queryArg?: PokemonsQueryInput) => {
  const client = useApolloClient()

  const query: PokemonsQueryInput = useMemo(() => defaults({}, queryArg, { offset: 0, limit: 10 }), [queryArg])

  const pokemonsQuery = useQuery<GetPokemonsQuery>(GET_POKEMONS_QUERY, { variables: { query }, client })

  const onFetchMore = useMemo(
    () =>
      debounce(async () => {
        const offset = pokemonsQuery.data?.pokemons.edges.length
        await pokemonsQuery.fetchMore({ variables: { query: { offset } } })
      }, DEBOUNCE_MS),
    [pokemonsQuery],
  )

  return useMemo(() => {
    const { loading, error, data } = pokemonsQuery
    const { edges = [], count } = data?.pokemons ?? {}

    return {
      pokemonsQuery,
      edges,
      edgesCount: edges.length,
      count,
      loading,
      error,
      onFetchMore,
    }
  }, [pokemonsQuery, onFetchMore])
}

// ====================================================
// Query cache field policy
// ====================================================
export const pokemonsQueryFieldPolicy: FieldPolicy = {
  keyArgs: [
    ['filter', 'search'],
    ['filter', 'isFavorite'],
  ],

  read(existing: PokemonConnection, { args }) {
    if (!existing) {
      return undefined
    }

    // Always search/filter on the server
    if (args) {
      const { search, filter } = args.query as PokemonsQueryInput

      // TODO: Improve somehow...
      if (search || filter?.type?.length || filter?.resistance?.length || filter?.weakness?.length) {
        return undefined
      }
    }

    return existing
  },

  merge(existing: PokemonConnection, incoming: PokemonConnection) {
    if (!existing) return incoming
    if (!incoming) return existing

    const edges = uniqBy([...existing.edges, ...incoming.edges], '__ref')

    return {
      ...incoming,
      count: Math.max(existing.count, incoming.count),
      edges,
    }
  },
}
