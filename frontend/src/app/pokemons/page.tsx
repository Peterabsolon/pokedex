'use client'

import { useDebouncedValue, usePokemonsQuery } from '~/hooks'

import { PokemonListItem, PokemonTypes } from './components'
import { PokemonsContextProvider } from './page.context'

export default function PokemonsPage() {
  const debounced = useDebouncedValue({ debounceMs: 250 })
  const { pokemons } = usePokemonsQuery({ search: debounced.value })

  return (
    <PokemonsContextProvider>
      <input className="text-black" value={debounced.input} onChange={debounced.onInputChange} />

      <PokemonTypes />

      {pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonsContextProvider>
  )
}
