import { PokemonInfoFragment } from '~/codegen/graphql'
import { PokemonType } from '~/constants'

import { PokemonTypeBadge } from '../PokemonTypeBadge'

export interface PokemonInfoProps {
  pokemon: PokemonInfoFragment
  showDetailInfo?: boolean
  onTypeClick?: (type: PokemonType) => void
  onResistanceClick?: (type: PokemonType) => void
  onWeaknessClick?: (type: PokemonType) => void
}

export const PokemonInfo = ({
  pokemon,
  showDetailInfo,
  onResistanceClick,
  onTypeClick,
  onWeaknessClick,
}: PokemonInfoProps) => {
  const { name, types, resistant, weaknesses } = pokemon

  return (
    <>
      <h2 className="mb-1 text-xl font-bold">{name}</h2>

      <h3 className="mb-3 flex flex-wrap gap-2 font-medium">
        {types.map((type) => (
          <PokemonTypeBadge key={type} type={type as PokemonType} onClick={() => onTypeClick?.(type as PokemonType)} />
        ))}
      </h3>

      {showDetailInfo && (
        <div className="mb-4">
          <div className="mb-3 flex flex-wrap gap-2">
            <div className="w-full text-sm font-bold">Resistant</div>
            {resistant.map((type) => (
              <PokemonTypeBadge
                key={type}
                type={type as PokemonType}
                onClick={() => onResistanceClick?.(type as PokemonType)}
              />
            ))}
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            <div className="w-full text-sm font-bold">Weaknesses</div>
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
    </>
  )
}
