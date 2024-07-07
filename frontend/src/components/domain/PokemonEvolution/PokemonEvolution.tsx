import { PokemonDetailsFragment } from '~/codegen/graphql'
import { Button } from '~/components/ui'
import { usePokemonActions } from '~/hooks'

export interface PokemonEvolutionProps {
  pokemon: PokemonDetailsFragment
  pokemonEvolutionPrev?: PokemonDetailsFragment
  pokemonEvolutionNext?: PokemonDetailsFragment
}

export const PokemonEvolution = ({ pokemon, pokemonEvolutionPrev, pokemonEvolutionNext }: PokemonEvolutionProps) => {
  const { handleViewDetail } = usePokemonActions()

  return (
    <div>
      <div>
        {pokemonEvolutionPrev && (
          <Button onClick={() => handleViewDetail(pokemonEvolutionPrev.name)}>
            {`< `} {pokemonEvolutionPrev.name}
          </Button>
        )}
      </div>

      <div>
        {pokemonEvolutionNext && (
          <Button onClick={() => handleViewDetail(pokemonEvolutionNext.name)}>
            {pokemonEvolutionNext.name} {` >`}
          </Button>
        )}
      </div>
    </div>
  )
}
