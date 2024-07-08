import { useRouter } from 'next/navigation'
import { useCallback, useMemo } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { ROUTES } from '~/constants'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'
import { playPokemonSound } from '~/utils'

export const usePokemonActions = () => {
  const router = useRouter()

  const { handleFavorite } = useFavoritePokemonMutation()
  const { handleUnFavorite } = useUnFavoritePokemonMutation()

  const handleToggleFavorite = useCallback(
    (pokemon: PokemonInfoFragment) => {
      pokemon.isFavorite ? handleUnFavorite(pokemon.id) : handleFavorite(pokemon.id)
    },
    [handleFavorite, handleUnFavorite],
  )

  const handleViewDetail = useCallback(
    (pokemon: PokemonInfoFragment | string) => {
      router.push(ROUTES.POKEMON_DETAIL.replace(':name', typeof pokemon === 'string' ? pokemon : pokemon.name))
    },
    [router],
  )

  const handlePlaySound = useCallback((pokemon: PokemonInfoFragment) => {
    playPokemonSound(pokemon.number)
  }, [])

  return useMemo(
    () => ({
      handleToggleFavorite,
      handleViewDetail,
      handlePlaySound,
    }),
    [handleViewDetail, handleToggleFavorite, handlePlaySound],
  )
}
