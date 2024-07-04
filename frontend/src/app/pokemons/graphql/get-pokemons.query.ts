import { gql } from '@apollo/client'

export const GET_POKEMONS_QUERY = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(query: { limit: $limit, offset: $offset }) {
      edges {
        id
        name
      }
    }
  }
`
