import classNames from 'classnames'

import { PokemonDetailsFragment } from '~/codegen/graphql'
import { Button } from '~/components/ui'
import { usePokemonActions } from '~/hooks'

export interface PokemonEvolutionProps {
  className?: string
  pokemonEvolutionPrev?: PokemonDetailsFragment
  pokemonEvolutionNext?: PokemonDetailsFragment
}

export const PokemonEvolution = ({ className, pokemonEvolutionPrev, pokemonEvolutionNext }: PokemonEvolutionProps) => {
  const { handleViewDetail } = usePokemonActions()

  if (!pokemonEvolutionPrev && !pokemonEvolutionNext) {
    return null
  }

  return (
    <>
      <h3 className="mb-2 text-lg font-bold">Evolutions</h3>

      <div className={classNames('flex justify-start gap-2', className)}>
        {pokemonEvolutionPrev && (
          <Button onClick={() => handleViewDetail(pokemonEvolutionPrev.name)}>
            {`<- `} {pokemonEvolutionPrev.name}
          </Button>
        )}

        {pokemonEvolutionNext && (
          <Button onClick={() => handleViewDetail(pokemonEvolutionNext.name)}>
            {pokemonEvolutionNext.name} {` ->`}
          </Button>
        )}
      </div>
    </>
  )
}
