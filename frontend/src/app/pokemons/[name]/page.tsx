'use client'

import { useEffect } from 'react'

import { PokemonDetail } from '~/components'

import { PokemonsContextProvider, usePokemonsContext } from './pokemon.context'

interface PageParams {
  params: { name: string }
}

const PokemonDetailPage = ({ params }: PageParams) => {
  const { actions, queries } = usePokemonsContext()

  const { pokemon } = queries.pokemonQuery
  const { pokemon: pokemonEvolutionNext } = queries.pokemonEvolutionNextQuery
  const { pokemon: pokemonEvolutionPrev } = queries.pokemonEvolutionPrevQuery

  useEffect(() => {
    actions.setPokemonName(params.name)
  }, [params.name, actions])

  return (
    <div className="w-full px-8">
      {pokemon && (
        <PokemonDetail
          pokemonEvolutionNext={pokemonEvolutionNext}
          pokemonEvolutionPrev={pokemonEvolutionPrev}
          pokemon={pokemon}
        />
      )}
    </div>
  )
}

export default function Page({ params }: PageParams) {
  return (
    <PokemonsContextProvider>
      <PokemonDetailPage params={params} />
    </PokemonsContextProvider>
  )
}
