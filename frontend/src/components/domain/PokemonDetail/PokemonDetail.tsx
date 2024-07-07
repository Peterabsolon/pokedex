import { useRouter } from 'next/navigation'
import { ElementType } from 'react'

import { PokemonDetailsFragment } from '~/codegen/graphql'
import { HeartIcon, SpeakerIcon } from '~/components/icons'
import { Button, Card } from '~/components/ui'
import { ROUTES } from '~/constants'
import { usePokemonActions } from '~/hooks'

import { PokemonEvolution, PokemonEvolutionProps } from '../PokemonEvolution'
import { PokemonImage } from '../PokemonImage'
import { PokemonInfo } from '../PokemonInfo'

export interface PokemonDetailProps extends PokemonEvolutionProps {
  pokemon: PokemonDetailsFragment
  withCard?: boolean
}

export const PokemonDetail = ({
  pokemon,
  pokemonEvolutionNext,
  pokemonEvolutionPrev,
  withCard = true,
}: PokemonDetailProps) => {
  const router = useRouter()
  const { handlePlaySound, handleToggleFavorite } = usePokemonActions()
  const Wrapper = withCard ? Card : ('div' as ElementType)

  return (
    <Wrapper className="mx-auto w-full max-w-[1280px]">
      <Button className="mb-4" onClick={() => router.push(ROUTES.POKEMONS)}>
        {'<-'} Return
      </Button>

      <div className="mt-8 flex flex-row gap-8">
        <PokemonImage className="min-w-[260px] flex-1" imageSrcUrl={pokemon.image} />

        <div className="flex-1">
          <PokemonInfo showDetailInfo pokemon={pokemon} />

          <div className="mb-3">
            <h3 className="mb-2 text-sm font-bold">Max CP</h3>
            <h4 className="text-xl font-bold">{pokemon.maxCP}</h4>
          </div>

          <div className="mb-3">
            <h3 className="mb-2 text-sm font-bold">Max HP</h3>
            <h4 className="text-xl font-bold">{pokemon.maxHP}</h4>
          </div>

          <div className="mb-3">
            <h3 className="mb-2 text-sm font-bold">Evolutions</h3>
            <PokemonEvolution pokemonEvolutionNext={pokemonEvolutionNext} pokemonEvolutionPrev={pokemonEvolutionPrev} />
          </div>

          <h3 className="mb-2 text-sm font-bold">Actions</h3>
          <div className="flex gap-2">
            <Button
              onClick={() => handleToggleFavorite(pokemon)}
              stopPropagation
              iconLeft={<HeartIcon className="mr-2 size-5" fill={pokemon.isFavorite ? 'currentColor' : 'none'} />}
            >
              {pokemon.isFavorite ? 'Unfavorite' : 'Favorite'}
            </Button>

            <Button
              onClick={() => handlePlaySound(pokemon)}
              stopPropagation
              iconLeft={<SpeakerIcon className="mr-2 size-5" />}
            >
              Sound
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
