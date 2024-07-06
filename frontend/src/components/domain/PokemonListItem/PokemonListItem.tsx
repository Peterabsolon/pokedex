import chroma from 'chroma-js'
import { MotionProps } from 'framer-motion'
import { useCallback } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { Button, Card, DEFAULT_CARD_MOTION } from '~/components/ui'
import { PokemonType } from '~/constants/pokemonTypes'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'

import { PokemonTypeBadge } from '../PokemonTypeBadge'
import { POKEMON_TYPE_COLORS } from '../PokemonTypeBadge/PokemonTypeBadge.constants'

const MOTION_PROPS: MotionProps = {
  ...DEFAULT_CARD_MOTION,
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95 },
}

export interface PokemonListItemProps {
  onClick?: (pokemon: PokemonInfoFragment) => void
  onTypeClick?: (type: PokemonType) => void
  onResistanceClick?: (type: PokemonType) => void
  onWeaknessClick?: (type: PokemonType) => void
  pokemon: PokemonInfoFragment
  showDetailInfo: boolean
}

export const PokemonListItem = ({
  pokemon,
  showDetailInfo,
  onClick,
  onTypeClick,
  onResistanceClick,
  onWeaknessClick,
}: PokemonListItemProps) => {
  // ====================================================
  // Props
  // ====================================================
  const { id, name, isFavorite, types, weaknesses, resistant, image } = pokemon

  const { handleFavorite } = useFavoritePokemonMutation()
  const { handleUnFavorite } = useUnFavoritePokemonMutation()

  // ====================================================
  // Click handlers
  // ====================================================
  const handleToggleFavorite = useCallback(() => {
    isFavorite ? handleUnFavorite(id) : handleFavorite(id)
  }, [isFavorite, id, handleFavorite, handleUnFavorite])

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(pokemon)
    }
  }, [pokemon, onClick])

  const handleTypeClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>, type: PokemonType) => {
      if (onTypeClick) {
        event.stopPropagation()
        onTypeClick(type)
      }
    },
    [onTypeClick],
  )

  const handleResistanceClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>, type: PokemonType) => {
      if (onResistanceClick) {
        event.stopPropagation()
        onResistanceClick(type)
      }
    },
    [onResistanceClick],
  )

  const handleWeaknessClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>, type: PokemonType) => {
      if (onWeaknessClick) {
        event.stopPropagation()
        onWeaknessClick(type)
      }
    },
    [onWeaknessClick],
  )

  // ====================================================
  // Computed
  // ====================================================
  const color = types[0] ? POKEMON_TYPE_COLORS[types[0] as PokemonType] : '#fff'
  const colorBackground = chroma.mix(color, '#fff', 0.4).hex()

  // ====================================================
  // JSX
  // ====================================================
  return (
    <Card onClick={handleClick} motion={MOTION_PROPS} style={{ background: colorBackground }} className="p-4">
      <div className="mb-4 rounded-lg bg-white p-4">
        <div
          className="mx-auto aspect-square h-auto w-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${image}")` }}
        />
      </div>

      {/* TODO: Title component */}
      <h2 className="mb-1 text-lg font-bold">{name}</h2>

      <h3 className="text-md mb-3 flex gap-2 font-medium">
        {types.map((type) => (
          <PokemonTypeBadge
            key={type}
            type={type as PokemonType}
            onClick={(e) => handleTypeClick(e, type as PokemonType)}
          />
        ))}
      </h3>

      {showDetailInfo && (
        <>
          <div className="mb-3 flex flex-wrap gap-2 font-medium">
            <div className="w-full text-lg font-bold">Resistant</div>
            {resistant.map((type) => (
              <PokemonTypeBadge
                key={type}
                type={type as PokemonType}
                onClick={(e) => handleResistanceClick(e, type as PokemonType)}
              />
            ))}
          </div>

          <div className="mb-3 flex flex-wrap gap-2 font-medium">
            <div className="w-full text-lg font-bold">Weaknesses</div>
            {weaknesses.map((type) => (
              <PokemonTypeBadge
                key={type}
                type={type as PokemonType}
                onClick={(e) => handleWeaknessClick(e, type as PokemonType)}
              />
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
