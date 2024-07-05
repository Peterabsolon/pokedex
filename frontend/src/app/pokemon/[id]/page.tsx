'use client'

import { useEffect } from 'react'

import { PokemonsContextProvider, usePokemonsContext } from './pokemon.context'

interface PageParams {
  params: { id: string }
}

export const PokemonDetailPage = ({ params }: PageParams) => {
  const { actions, queries } = usePokemonsContext()

  useEffect(() => {
    actions.setPokemonId(params.id)
  }, [params.id, actions])

  return (
    <div>
      Detail {params.id} - {queries.pokemonQuery.pokemonById?.name}
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
