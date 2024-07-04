import { gql } from '@apollo/client'

import { POKEMON_INFO_FRAGMENT } from './fragments/pokemon-info.fragment'

export const GET_POKEMONS_QUERY = gql`
  ${POKEMON_INFO_FRAGMENT}

  query getPokemons($limit: Int, $offset: Int) {
    pokemons(query: { limit: $limit, offset: $offset }) {
      edges {
        ...PokemonInfo
      }
    }
  }
`
