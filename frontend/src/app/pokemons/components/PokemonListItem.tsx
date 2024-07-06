import { useRouter } from 'next/navigation'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { Button, Card, DEFAULT_CARD_MOTION } from '~/components'
import { ROUTES } from '~/constants'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'

import { usePokemonsContext } from '../pokemons.context'

const MOTION_PROPS = {
  ...DEFAULT_CARD_MOTION,
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

export interface PokemonListItemProps {
  pokemon: PokemonInfoFragment
}

export const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const { state } = usePokemonsContext()
  const { id, name, isFavorite, types, weaknesses, resistant, image } = pokemon
  const router = useRouter()

  const { handleFavorite } = useFavoritePokemonMutation()
  const { handleUnFavorite } = useUnFavoritePokemonMutation()

  const handleToggleFavorite = () => {
    isFavorite ? handleUnFavorite(id) : handleFavorite(id)
  }

  const handleViewDetail = () => {
    router.push(ROUTES.POKEMON_DETAIL.replace(':id', id))
  }

  return (
    <Card onClick={handleViewDetail} motion={MOTION_PROPS}>
      <div
        className="mx-auto mb-4 h-64 w-64 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
      />

      {/* Title component */}
      <h2 className="mb-1 text-lg font-bold">{name}</h2>
      <h3 className="text-md mb-3 font-medium">{types.join(',')}</h3>

      {state.showDetailInfo && (
        <>
          <div>Resistant: {resistant.join(',')}</div>
          <div>Weakness: {weaknesses.join(',')}</div>
        </>
      )}

      <Button className="w-full" onClick={handleToggleFavorite} stopPropagation>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </Button>
    </Card>
  )
}
