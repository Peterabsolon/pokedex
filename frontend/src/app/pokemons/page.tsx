'use client'

import { PokemonFilters, PokemonListItem } from './components'
import { PokemonsContextProvider, usePokemonsContext } from './pokemons.context'

const SIDEBAR_WIDTH_PX = 460

const PokemonsPage = () => {
  const { queries } = usePokemonsContext()
  const { pokemonsQuery } = queries

  return (
    <div className="flex max-w-full flex-1 overflow-hidden py-8">
      <main className="mr-8 flex flex-row flex-wrap items-start justify-start gap-4">
        {pokemonsQuery.pokemons.map((pokemon) => (
          <PokemonListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </main>

      <div style={{ width: SIDEBAR_WIDTH_PX }} className="flex-shrink-0">
        <PokemonFilters />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <PokemonsContextProvider>
      <PokemonsPage />
    </PokemonsContextProvider>
  )
}
