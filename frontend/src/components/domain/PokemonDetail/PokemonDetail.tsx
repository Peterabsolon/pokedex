import { useRouter } from 'next/navigation'
import { ElementType } from 'react'

import { Attack, PokemonDetailsFragment } from '~/codegen/graphql'
import { Button, Card, Table, TableColumn } from '~/components/ui'
import { ROUTES } from '~/constants'

import { PokemonActions } from '../PokemonActions'
import { PokemonEvolution, PokemonEvolutionProps } from '../PokemonEvolution'
import { PokemonImage } from '../PokemonImage'
import { PokemonInfo } from '../PokemonInfo'
import { PokemonTypeBadge } from '../PokemonTypeBadge'

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

  const { attacks, image, maxCP, maxHP, evolutionRequirements, weight, height } = pokemon

  const Wrapper = withCard ? Card : ('div' as ElementType)

  return (
    <Wrapper className="mx-auto w-full max-w-[1280px]">
      <div className="flex justify-between">
        <Button className="mb-8" onClick={() => router.push(ROUTES.POKEMONS)}>
          {'<-'} Return
        </Button>

        <div className="flex-none">
          <PokemonActions pokemon={pokemon} />
        </div>
      </div>

      <div className="mb-8 flex flex-row gap-16">
        <PokemonImage className="min-w-[260px] flex-1" imageSrcUrl={image} />

        <div className="flex-1">
          <PokemonInfo showDetailInfo pokemon={pokemon} />

          <div className="mb-3">
            <PokemonEvolution pokemonEvolutionNext={pokemonEvolutionNext} pokemonEvolutionPrev={pokemonEvolutionPrev} />
          </div>

          {evolutionRequirements && (
            <div className="mb-3">
              <h3 className="mb-2 text-lg font-bold">Evolution requirement</h3>
              <div>
                <h4 className="mr-2 inline text-3xl font-bold">{evolutionRequirements.amount}</h4>
                <h4 className="inline font-bold">{evolutionRequirements.name}</h4>
              </div>
            </div>
          )}

          <div className="mb-3">
            <h3 className="mb-2 text-lg font-bold">Max CP</h3>
            <h4 className="text-3xl font-bold">{maxCP}</h4>
          </div>

          <div className="mb-3">
            <h3 className="mb-2 text-lg font-bold">Max HP</h3>
            <h4 className="text-3xl font-bold">{maxHP}</h4>
          </div>

          <div className="mb-3">
            <h3 className="mb-2 text-lg font-bold">Weight</h3>
            <h4 className="text-3xl font-bold">
              {weight.minimum} - {weight.maximum}
            </h4>
          </div>

          <div className="mb-3">
            <h3 className="mb-2 text-lg font-bold">Height</h3>
            <h4 className="text-3xl font-bold">
              {height.minimum} - {height.maximum}
            </h4>
          </div>
        </div>
      </div>

      <div>
        <Table label="Fast attacks" keyProp="name" data={attacks.fast} columns={ATTACK_COLUMNS} />
        <Table label="Special attacks" keyProp="name" data={attacks.special} columns={ATTACK_COLUMNS} />
      </div>
    </Wrapper>
  )
}

const ATTACK_COLUMNS: TableColumn<Attack>[] = [
  { label: 'Name', dataKey: 'name', width: '35%' },
  { label: 'Damage', dataKey: 'damage' },
  { label: 'Type', render: (row) => <PokemonTypeBadge className="w-fit" type={row.type} /> },
]
