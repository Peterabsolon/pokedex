import { useMutation } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { toast } from 'sonner'

import { FavoritePokemonMutation } from '~/codegen/graphql'
import { FAVORITE_POKEMON_MUTATION, updateGetPokemonsQueryCache } from '~/graphql'

export const useFavoritePokemonMutation = () => {
  const [mutate, result] = useMutation<FavoritePokemonMutation>(FAVORITE_POKEMON_MUTATION, {
    update(cache, { data }) {
      if (data?.favoritePokemon) {
        toast.success(`${data.favoritePokemon.name} successfully added to favorites.`)
        updateGetPokemonsQueryCache(cache, data.favoritePokemon)
      }

      return
    },
  })

  const handleFavorite = useCallback(
    async (id: string) => {
      try {
        await mutate({ variables: { id } })
      } catch (err) {
        const msg = 'Failed to add pokemon to favorites.'
        console.error(msg, err)
        toast.error(msg)
      }
    },
    [mutate],
  )

  return useMemo(
    () => ({
      result,
      handleFavorite,
    }),
    [result, handleFavorite],
  )
}
