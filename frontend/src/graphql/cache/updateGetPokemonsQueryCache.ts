import { ApolloCache } from '@apollo/client'
import { merge, set } from 'lodash'

import { GetPokemonsQuery, PokemonInfoFragment } from '~/codegen/graphql'

import { GET_POKEMONS_QUERY } from '../get-pokemons.query'

export const updateGetPokemonsQueryCache = (cache: ApolloCache<any>, pokemon: PokemonInfoFragment) => {
  const cachedData = cache.readQuery<GetPokemonsQuery>({ query: GET_POKEMONS_QUERY })
  const cachedEdges = cachedData?.pokemons.edges

  if (cachedEdges) {
    const cachedEdgeIndex = cachedEdges.findIndex((edge) => edge.id === pokemon?.id)

    if (cachedEdgeIndex > -1) {
      const updatedEdges = [...cachedEdges]
      updatedEdges[cachedEdgeIndex] = merge(cachedEdges[cachedEdgeIndex], pokemon)

      cache.writeQuery({
        query: GET_POKEMONS_QUERY,
        data: set(cachedData, 'edges', updatedEdges),
      })
    }
  }
}
