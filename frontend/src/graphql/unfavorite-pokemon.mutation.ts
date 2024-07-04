import { gql } from '@apollo/client'

import { POKEMON_DETAILS_FRAGMENT } from './fragments/pokemon-details.fragment'

export const UNFAVORITE_POKEMON_MUTATION = gql`
  ${POKEMON_DETAILS_FRAGMENT}

  mutation unFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      ...PokemonDetails
    }
  }
`
