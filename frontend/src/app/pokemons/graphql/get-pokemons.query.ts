import { gql } from '@apollo/client'

export const GET_POKEMONS_QUERY = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(query: { limit: $limit, offset: $offset }) {
      edges {
        id
        name
        classification
        types
        resistant
        weaknesses
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        fleeRate
        evolutionRequirements {
          amount
          name
        }
        evolutions {
          id
          name
        }
        maxCP
        maxHP
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }
  }
`
