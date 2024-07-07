import { ElementType } from 'react'

import { Card } from '~/components/ui'

import { PokemonEvolution, PokemonEvolutionProps } from '../PokemonEvolution'
import { PokemonImage } from '../PokemonImage'
import { PokemonInfo } from '../PokemonInfo'

export interface PokemonDetailProps extends PokemonEvolutionProps {
  withCard?: boolean
}

export const PokemonDetail = ({
  pokemon,
  pokemonEvolutionNext,
  pokemonEvolutionPrev,
  withCard = true,
}: PokemonDetailProps) => {
  const Wrapper = withCard ? Card : ('div' as ElementType)

  return (
    <Wrapper className="mx-auto w-full max-w-[1280px]">
      <PokemonEvolution
        pokemon={pokemon}
        pokemonEvolutionNext={pokemonEvolutionNext}
        pokemonEvolutionPrev={pokemonEvolutionPrev}
      />

      <div className="flex flex-row">
        <PokemonImage className="flex-1" imageSrcUrl={pokemon.image} />

        <div className="flex-auto">
          <PokemonInfo showDetailInfo pokemon={pokemon} />
        </div>
      </div>

      <div>Attacks..</div>
    </Wrapper>
  )
}
