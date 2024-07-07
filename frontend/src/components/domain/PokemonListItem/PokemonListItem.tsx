import classNames from 'classnames'
import { MotionProps } from 'framer-motion'
import { useCallback } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { HeartIcon, SpeakerIcon } from '~/components/icons'
import { Button, Card, CardProps, DEFAULT_CARD_MOTION } from '~/components/ui'
import { PokemonType } from '~/constants'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'
import { playPokemonSound } from '~/utils'

import { PokemonTypeBadge } from '../PokemonTypeBadge'

const MOTION_PROPS: MotionProps = {
  ...DEFAULT_CARD_MOTION,
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
}

export interface PokemonListItemProps extends Omit<CardProps, 'onClick' | 'children'> {
  pokemon: PokemonInfoFragment
  showDetailInfo: boolean

  onClick?: (pokemon: PokemonInfoFragment) => void
  onTypeClick?: (type: PokemonType) => void
  onResistanceClick?: (type: PokemonType) => void
  onWeaknessClick?: (type: PokemonType) => void
}

export const PokemonListItem = ({
  className,
  style,
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

  const handlePlaySound = useCallback(() => {
    playPokemonSound(pokemon.number)
  }, [pokemon])

  // ====================================================
  // Computed
  // ====================================================
  // const color = types[0] ? POKEMON_TYPE_COLORS[types[0] as PokemonType] : '#fff'
  // const colorLighter = chroma.mix(color, '#fff', 0.4).hex()
  // const colorDarker = chroma.mix(color, '#000', 0.4).hex()

  // ====================================================
  // JSX
  // ====================================================
  return (
    <Card onClick={handleClick} motion={MOTION_PROPS} className={classNames('p-4', className)} style={style}>
      <div className="mb-4 rounded-lg bg-white p-4">
        <div
          className="mx-auto aspect-square h-auto w-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${image}")` }}
        />
      </div>

      {/* TODO: Title component */}
      <h2 className="mb-1 text-lg font-bold">{name}</h2>

      <h3 className="mb-3 flex flex-wrap gap-2 font-medium">
        {types.map((type) => (
          <PokemonTypeBadge key={type} type={type as PokemonType} onClick={() => onTypeClick?.(type as PokemonType)} />
        ))}
      </h3>

      {showDetailInfo && (
        <div className="mb-4">
          <div className="mb-3 flex flex-wrap gap-2 font-medium">
            <div className="w-full text-sm font-medium">Resistant</div>
            {resistant.map((type) => (
              <PokemonTypeBadge
                key={type}
                type={type as PokemonType}
                onClick={() => onResistanceClick?.(type as PokemonType)}
              />
            ))}
          </div>

          <div className="mb-3 flex flex-wrap gap-2 font-medium">
            <div className="w-full text-sm font-medium">Weaknesses</div>
            {weaknesses.map((type) => (
              <PokemonTypeBadge
                key={type}
                type={type as PokemonType}
                onClick={() => onWeaknessClick?.(type as PokemonType)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2">
        <Button
          className="flex-1 pl-0 pr-0"
          onClick={handleToggleFavorite}
          stopPropagation
          iconLeft={<HeartIcon className="mr-2 size-5" fill={isFavorite ? 'currentColor' : 'none'} />}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>

        <Button
          className="flex-1 pl-0 pr-0"
          onClick={handlePlaySound}
          stopPropagation
          iconLeft={<SpeakerIcon className="mr-2 size-5" />}
        >
          Sound
        </Button>
      </div>
    </Card>
  )
}
