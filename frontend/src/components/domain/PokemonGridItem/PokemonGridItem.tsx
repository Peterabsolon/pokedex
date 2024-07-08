import classNames from 'classnames'
import { MotionProps } from 'framer-motion'

import { PokemonInfoFragment } from '~/codegen/graphql'
import { Card, CardProps, DEFAULT_CARD_MOTION } from '~/components/ui'
import { usePokemonActions } from '~/hooks'

import { PokemonActions } from '../PokemonActions'
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
  const { id, isFavorite, image } = pokemon

  const { handleViewDetail, handlePlaySound, handleToggleFavorite } = usePokemonActions()

  return (
    <Card
      onClick={() => handleViewDetail(pokemon)}
      motion={MOTION_PROPS}
      className={classNames('p-4', className)}
      style={style}
    >
      <div className="mb-4 rounded-lg bg-white p-4">
        <PokemonImage className="mx-auto w-full" imageSrcUrl={image} />
      </div>

      <PokemonInfo pokemon={pokemon} showDetailInfo={showDetailInfo} {...pokemonInfoProps} />

      <PokemonActions fixedWidth pokemon={pokemon} />
    </Card>
  )
}
