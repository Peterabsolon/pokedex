import { Badge } from '~/components/ui/Badge/Badge'
import { PokemonType } from '~/constants/pokemonTypes'

import { POKEMON_TYPE_COLORS } from './PokemonTypeBadge.constants'

export interface PokemonTypeBadgeProps {
  type: PokemonType
}

export const PokemonTypeBadge = ({ type }: PokemonTypeBadgeProps) => {
  const color = POKEMON_TYPE_COLORS[type]

  return <Badge color={color}>{type}</Badge>
}
