'use client'

import { PokemonFilters, PokemonListItem } from './components'
import { PokemonsContextProvider, usePokemonsContext } from './pokemons.context'

const SIDEBAR_WIDTH_PX = 460
const ITEM_MIN_WIDTH_PX = 360
const ITEM_MAX_WIDTH_PX = 420

const PokemonsPage = () => {
  const { queries } = usePokemonsContext()
  const { pokemonsQuery } = queries
  const { pokemons } = pokemonsQuery

  const maxWidth = pokemons.length > 4 ? '1fr' : `${ITEM_MAX_WIDTH_PX}px`

  return (
    <div className="flex max-w-full flex-1 overflow-hidden p-8">
      <div
        data-testId="pokemons"
        className="mr-8 grid flex-1 gap-8 self-start"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${ITEM_MIN_WIDTH_PX}px, ${maxWidth}))` }}
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
