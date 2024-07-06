import { useMutation } from '@apollo/client'
import { set } from 'lodash'
import { useCallback, useMemo } from 'react'

import { GetPokemonsQuery, UnFavoritePokemonMutation } from '~/codegen/graphql'
import { GET_POKEMONS_QUERY, UNFAVORITE_POKEMON_MUTATION } from '~/graphql'

export const useUnFavoritePokemonMutation = () => {
  const [mutate, result] = useMutation<UnFavoritePokemonMutation>(UNFAVORITE_POKEMON_MUTATION, {
    update(cache, { data }) {
      const cachedData = cache.readQuery<GetPokemonsQuery>({ query: GET_POKEMONS_QUERY })
      const edges = cachedData?.pokemons.edges

      if (edges && data) {
        cache.writeQuery({
          query: GET_POKEMONS_QUERY,
          data: set(cachedData, 'edges', [...edges, data.unFavoritePokemon]),
        })
      }
    },
  })

  console.log('useUnFavoritePokemonMutation')

  const handleUnFavorite = useCallback(async (id: string) => mutate({ variables: { id } }), [mutate])

  return useMemo(
    () => ({
      result,
      handleUnFavorite,
    }),
    [result, handleUnFavorite],
  )
}
