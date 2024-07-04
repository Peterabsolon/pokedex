import { PokemonInfoFragment } from '~/codegen/graphql'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'

export interface PokemonListItemProps {
  pokemon: PokemonInfoFragment
}

export const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const { id, name, isFavorite } = pokemon

  const { handleFavorite } = useFavoritePokemonMutation()
  const { handleUnFavorite } = useUnFavoritePokemonMutation()

  const handleToggleFavorite = () => {
    if (isFavorite) {
      handleUnFavorite(id)
    } else {
      handleFavorite(id)
    }
  }

  return (
    <div>
      {name}

      <button onClick={handleToggleFavorite}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
    </div>
  )
}
