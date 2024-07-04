'use client'

import { useFavoritePokemonMutation, usePokemonsQuery, useUnFavoritePokemonMutation } from './hooks'

export default function PokemonsPage() {
  const { pokemons } = usePokemonsQuery()
  const { handleFavorite } = useFavoritePokemonMutation()
  const { handleUnFavorite } = useUnFavoritePokemonMutation()

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          {pokemon.name}
          <button onClick={() => (pokemon.isFavorite ? handleUnFavorite(pokemon.id) : handleFavorite(pokemon.id))}>
            {pokemon.isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ))}
    </div>
  )
}
