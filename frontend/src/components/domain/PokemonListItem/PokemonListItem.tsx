import { MotionProps } from 'framer-motion'
import { useCallback } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { Button, Card, DEFAULT_CARD_MOTION } from '~/components/ui'
import { PokemonType } from '~/constants/pokemonTypes'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'

import { PokemonTypeBadge } from '../PokemonTypeBadge'

const MOTION_PROPS: MotionProps = {
  ...DEFAULT_CARD_MOTION,
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
}

export interface PokemonListItemProps {
  onClick?: (pokemon: PokemonInfoFragment) => void
  pokemon: PokemonInfoFragment
  showDetailInfo: boolean
}

export const PokemonListItem = ({ pokemon, showDetailInfo, onClick }: PokemonListItemProps) => {
  const { id, name, isFavorite, types, weaknesses, resistant, image } = pokemon

  const { handleFavorite } = useFavoritePokemonMutation()
  const { handleUnFavorite } = useUnFavoritePokemonMutation()

  const handleToggleFavorite = useCallback(() => {
    isFavorite ? handleUnFavorite(id) : handleFavorite(id)
  }, [isFavorite, id, handleFavorite, handleUnFavorite])

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(pokemon)
    }
  }, [pokemon, onClick])

  return (
    <Card onClick={handleClick} motion={MOTION_PROPS}>
      <div
        className="mx-auto mb-4 h-64 w-64 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
      />

      {/* TODO: Title component */}
      <h2 className="mb-1 text-lg font-bold">{name}</h2>

      <h3 className="text-md mb-3 flex gap-2 font-medium">
        {types.map((type) => (
          <PokemonTypeBadge key={type} type={type as PokemonType} />
        ))}
      </h3>

      {showDetailInfo && (
        <>
          <div className="mb-3 flex flex-wrap gap-2 font-medium">
            <div className="w-full text-lg font-bold">Resistant</div>
            {resistant.map((type) => (
              <PokemonTypeBadge key={type} type={type as PokemonType} />
            ))}
          </div>

          <div className="mb-3 flex flex-wrap gap-2 font-medium">
            <div className="w-full text-lg font-bold">Weaknesses</div>
            {weaknesses.map((type) => (
              <PokemonTypeBadge key={type} type={type as PokemonType} />
            ))}
          </div>
        </>
      )}

      <Button className="w-full" onClick={handleToggleFavorite} stopPropagation>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </Button>
    </Card>
  )
}
