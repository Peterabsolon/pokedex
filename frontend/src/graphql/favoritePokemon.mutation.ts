import { gql } from '@apollo/client'

import { POKEMON_DETAILS_FRAGMENT } from './fragments/pokemon-details.fragment'

export const FAVORITE_POKEMON_MUTATION = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  mutation favoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      ...PokemonDetails
    }
  }
`
