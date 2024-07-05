'use client'

import { PokemonFilters, PokemonListItem } from './components'
import { PokemonsContextProvider, usePokemonsContext } from './pokemons.context'

const SIDEBAR_WIDTH_PX = 460

const PokemonsPage = () => {
  const { queries } = usePokemonsContext()
  const { pokemonsQuery } = queries

  return (
    <div className="flex max-w-full flex-1 overflow-hidden p-8">
      <div
        className="mr-8 grid flex-1 gap-4 self-start"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        }}
      >
        {pokemonsQuery.pokemons.map((pokemon) => (
          <PokemonListItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

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
