import classNames from 'classnames'
import { MotionProps } from 'framer-motion'
import { useCallback } from 'react'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { HeartIcon, SpeakerIcon } from '~/components/icons'
import { Button, Card, CardProps, DEFAULT_CARD_MOTION } from '~/components/ui'
import { useFavoritePokemonMutation, useUnFavoritePokemonMutation } from '~/hooks'
import { playPokemonSound } from '~/utils'

import { PokemonImage } from '../PokemonImage'
import { PokemonInfo, PokemonInfoProps } from '../PokemonInfo'

const MOTION_PROPS: MotionProps = {
  ...DEFAULT_CARD_MOTION,
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
}

export interface PokemonGridItemProps extends Omit<CardProps, 'onClick' | 'children'>, PokemonInfoProps {
  pokemon: PokemonInfoFragment
  showDetailInfo: boolean
  onClick?: (pokemon: PokemonInfoFragment) => void
}

export const PokemonGridItem = ({
  className,
  style,
  pokemon,
  onClick,
  showDetailInfo,
  ...pokemonInfoProps
}: PokemonGridItemProps) => {
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
        <PokemonImage className="mx-auto w-full" imageSrcUrl={image} />
      </div>

      <PokemonInfo pokemon={pokemon} showDetailInfo={showDetailInfo} {...pokemonInfoProps} />

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
