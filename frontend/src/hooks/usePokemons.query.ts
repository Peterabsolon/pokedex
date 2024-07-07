import { useQuery } from '@apollo/client'
import { defaults } from 'lodash'
import { useCallback, useMemo } from 'react'

import { GetPokemonsQuery, PokemonsQueryInput } from '~/codegen/graphql'
import { GET_POKEMONS_QUERY } from '~/graphql'

// Add slight delay for fetching more results to simulate real client <=> server trip
const DEBOUNCE_MS = 1000

// ====================================================
// Hook
// ====================================================
export const usePokemonsQuery = (queryArg?: PokemonsQueryInput) => {
  const query: PokemonsQueryInput = useMemo(() => defaults({}, queryArg, { offset: 0, limit: 10 }), [queryArg])

  const pokemonsQuery = useQuery<GetPokemonsQuery>(GET_POKEMONS_QUERY, {
    notifyOnNetworkStatusChange: true,
    variables: { query },
  })

  const onFetchMore = useCallback(async () => {
    const offset = pokemonsQuery.data?.pokemons.edges.length
    await pokemonsQuery.fetchMore({ variables: { query: { offset } } })
  }, [pokemonsQuery])

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
