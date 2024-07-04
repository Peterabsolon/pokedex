import { gql } from '@apollo/client'

export const POKEMONS_QUERY = gql`
  query {
    pokemons(query: { limit: 10, offset: 0 }) {
      edges {
        name
      }
    }
  }
`
