'use client'

import { useDebouncedValue, usePokemonsQuery } from '~/hooks'

import { PokemonListItem } from './components'

export default function PokemonsPage() {
  const debounced = useDebouncedValue()
  const { pokemons } = usePokemonsQuery({ search: debounced.value })

  return (
    <div>
      <input className="text-black" value={debounced.input} onChange={debounced.onInputChange} />

      {pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}
