import { gql } from '@apollo/client'

import { POKEMON_DETAILS_FRAGMENT } from './fragments/pokemon-details.fragment'

export const GET_POKEMON_BY_ID_QUERY = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  query getPokemonById($id: ID!) {
    pokemonById(id: $id) {
      ...PokemonDetails
    }
  }
`
