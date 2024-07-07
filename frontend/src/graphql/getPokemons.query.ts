import { gql } from '@apollo/client'

import { POKEMON_DETAILS_FRAGMENT } from './fragments'
import { POKEMON_INFO_FRAGMENT } from './fragments/pokemon-info.fragment'

export const GET_POKEMONS_QUERY = gql`
  ${POKEMON_INFO_FRAGMENT}
  ${POKEMON_DETAILS_FRAGMENT}

  query getPokemons($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      count
      edges {
        ...PokemonInfo
        ...PokemonDetails
      }
    }
  }
`
