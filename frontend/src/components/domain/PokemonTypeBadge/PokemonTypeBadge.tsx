import { Badge, BadgeProps } from '~/components/ui/Badge/Badge'
import { PokemonType } from '~/constants/pokemonTypes'

import { POKEMON_TYPE_COLORS } from './PokemonTypeBadge.constants'

export interface PokemonTypeBadgeProps extends Omit<BadgeProps, 'color' | 'children'> {
  type: PokemonType
}

export const PokemonTypeBadge = ({ type, ...props }: PokemonTypeBadgeProps) => {
  const color = POKEMON_TYPE_COLORS[type]

  return (
    <Badge color={color} {...props}>
      {type}
    </Badge>
  )
}
