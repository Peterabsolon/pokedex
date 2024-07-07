import { gql } from '@apollo/client'

export const GET_POKEMON_TYPES_QUERY = gql`
  query getPokemonTypes {
    pokemonTypes
  }
`
