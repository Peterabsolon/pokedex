import { useApolloClient, useQuery } from '@apollo/client'
import { debounce, defaults } from 'lodash'
import { useMemo } from 'react'

import { GetPokemonsQuery, PokemonsQueryInput } from '~/codegen/graphql'
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
