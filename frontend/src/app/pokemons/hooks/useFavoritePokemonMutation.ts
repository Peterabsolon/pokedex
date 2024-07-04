import { useMutation } from '@apollo/client'
import { set } from 'lodash'
import { useCallback } from 'react'

import { FavoritePokemonMutation, GetPokemonsQuery } from '~/gql/graphql'

import { FAVORITE_POKEMON_MUTATION, GET_POKEMONS_QUERY } from '../graphql'

export const useFavoritePokemonMutation = () => {
  const [mutate, result] = useMutation<FavoritePokemonMutation>(FAVORITE_POKEMON_MUTATION, {
    update(cache, { data }) {
      const cachedData = cache.readQuery<GetPokemonsQuery>({ query: GET_POKEMONS_QUERY })
      const edges = cachedData?.pokemons.edges

      if (edges && data) {
        cache.writeQuery({
          query: GET_POKEMONS_QUERY,
          data: set(cachedData, 'edges', [...edges, data.favoritePokemon]),
        })
      }
    },
  })

  const handleFavorite = useCallback(async (id: string) => mutate({ variables: { id } }), [mutate])

  return {
    handleFavorite,
    ...result,
  }
}
