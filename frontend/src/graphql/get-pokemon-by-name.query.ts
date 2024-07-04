import { gql } from '@apollo/client'

import { POKEMON_DETAILS_FRAGMENT } from './fragments/pokemon-details.fragment'

export const GET_POKEMON_BY_NAME_QUERY = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  query getPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      ...PokemonDetails
    }
  }
`
