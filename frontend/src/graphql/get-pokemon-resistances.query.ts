import { gql } from '@apollo/client'

export const GET_POKEMON_RESISTANCES_QUERY = gql`
  query getPokemonResistances {
    pokemonResistances
  }
`
