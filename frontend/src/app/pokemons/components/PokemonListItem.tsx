import { useRouter } from 'next/navigation'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { Button } from '~/components'
import { ROUTES } from '~/constants'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'

export interface PokemonListItemProps {
  pokemon: PokemonInfoFragment
}

export const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const { id, name, isFavorite } = pokemon
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
      {name}

      <Button onClick={handleToggleFavorite}>{isFavorite ? 'Unfavorite' : 'Favorite'}</Button>
      <Button onClick={handleViewDetail}>View detail</Button>
    </div>
  )
}
