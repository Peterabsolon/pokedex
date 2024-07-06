import { useMutation } from '@apollo/client'
import { useCallback, useMemo } from 'react'

import { UnFavoritePokemonMutation } from '~/codegen/graphql'
import { UNFAVORITE_POKEMON_MUTATION, updateGetPokemonsQueryCache } from '~/graphql'

export const useUnFavoritePokemonMutation = () => {
  const [mutate, result] = useMutation<UnFavoritePokemonMutation>(UNFAVORITE_POKEMON_MUTATION, {
    update(cache, { data }) {
      if (data?.unFavoritePokemon) {
        updateGetPokemonsQueryCache(cache, data.unFavoritePokemon)
      }
    },
  })

  const handleUnFavorite = useCallback(async (id: string) => mutate({ variables: { id } }), [mutate])

  return useMemo(
    () => ({
      result,
      handleUnFavorite,
    }),
    [result, handleUnFavorite],
  )
}
