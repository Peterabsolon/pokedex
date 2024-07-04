import { gql } from '@apollo/client'

export const GET_POKEMON_WEAKNESSES_QUERY = gql`
  query getPokemonWeaknesses {
    pokemonWeaknesses
  }
`
