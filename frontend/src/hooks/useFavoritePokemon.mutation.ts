import { useMutation } from '@apollo/client'
import { useCallback, useMemo } from 'react'

import { FavoritePokemonMutation } from '~/codegen/graphql'
import { FAVORITE_POKEMON_MUTATION, updateGetPokemonsQueryCache } from '~/graphql'

export const useFavoritePokemonMutation = () => {
  const [mutate, result] = useMutation<FavoritePokemonMutation>(FAVORITE_POKEMON_MUTATION, {
    update(cache, { data }) {
      if (data?.favoritePokemon) {
        updateGetPokemonsQueryCache(cache, data.favoritePokemon)
      }
    },
  })

  const handleFavorite = useCallback(async (id: string) => mutate({ variables: { id } }), [mutate])

  return useMemo(
    () => ({
      result,
      handleFavorite,
    }),
    [result, handleFavorite],
  )
}
