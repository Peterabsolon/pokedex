import { Badge, BadgeProps } from '~/components/ui/Badge/Badge'
import { PokemonType } from '~/constants/pokemonTypes'

import { POKEMON_TYPE_COLORS } from './PokemonTypeBadge.constants'

export interface PokemonTypeBadgeProps extends Omit<BadgeProps, 'color' | 'children'> {
  type: PokemonType
  stopPropagation?: boolean
}

export const PokemonTypeBadge = ({ type, stopPropagation, onClick, ...props }: PokemonTypeBadgeProps) => {
  const color = POKEMON_TYPE_COLORS[type]

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (stopPropagation) {
      e.stopPropagation()
    }

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Badge {...props} color={color} onClick={handleClick}>
      {type}
    </Badge>
  )
}
