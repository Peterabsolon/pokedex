import { useMutation } from '@apollo/client'
import { useCallback, useMemo } from 'react'
import { toast } from 'sonner'

import { UnFavoritePokemonMutation } from '~/codegen/graphql'
import { UNFAVORITE_POKEMON_MUTATION, updateGetPokemonsQueryCache } from '~/graphql'

export const useUnFavoritePokemonMutation = () => {
  const [mutate, result] = useMutation<UnFavoritePokemonMutation>(UNFAVORITE_POKEMON_MUTATION, {
    update(cache, { data }) {
      if (data?.unFavoritePokemon) {
        toast.success(`${data.unFavoritePokemon.name} successfully removed from favorites.`)
        updateGetPokemonsQueryCache(cache, data.unFavoritePokemon)
      }
    },
  })

  const handleUnFavorite = useCallback(
    async (id: string) => {
      try {
        await mutate({ variables: { id } })
      } catch (err) {
        const msg = 'Failed to remove pokemon from favorites.'
        console.error(msg, err)
        toast.error(msg)
      }
    },
    [mutate],
  )

  return useMemo(
    () => ({
      result,
      handleUnFavorite,
    }),
    [result, handleUnFavorite],
  )
}
