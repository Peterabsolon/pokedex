import { useRouter } from 'next/navigation'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { Button } from '~/components'
import { ROUTES } from '~/constants'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'

export interface PokemonListItemProps {
  pokemon: PokemonInfoFragment
}

export const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const { id, name, isFavorite, types, weaknesses, resistant } = pokemon
  const router = useRouter()

  const { handleFavorite } = useFavoritePokemonMutation()
  const { handleUnFavorite } = useUnFavoritePokemonMutation()

  const handleToggleFavorite = () => {
    if (isFavorite) {
      handleUnFavorite(id)
    } else {
      handleFavorite(id)
    }
  }

  const handleViewDetail = () => {
    router.push(ROUTES.POKEMON_DETAIL.replace(':id', id))
  }

  return (
    <div>
      <div>{name}</div>
      <div>Types: {types.join(',')}</div>
      <div>Resistant: {resistant.join(',')}</div>
      <div>Weakness: {weaknesses.join(',')}</div>

      <Button onClick={handleToggleFavorite}>{isFavorite ? 'Unfavorite' : 'Favorite'}</Button>
      <Button onClick={handleViewDetail}>View detail</Button>
    </div>
  )
}
