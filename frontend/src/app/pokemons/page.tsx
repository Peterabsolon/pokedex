'use client'

import { PokemonFilters, PokemonListItem } from './components'
import { PokemonsContextProvider, usePokemonsContext } from './pokemons.context'

const PokemonsPage = () => {
  const { queries } = usePokemonsContext()
  const { pokemonsQuery } = queries

  return (
    <>
      <PokemonFilters />

      {pokemonsQuery.pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  )
}

export default function Page() {
  return (
    <PokemonsContextProvider>
      <PokemonsPage />
    </PokemonsContextProvider>
  )
}
