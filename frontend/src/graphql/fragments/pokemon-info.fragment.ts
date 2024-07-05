import { gql } from '@apollo/client'

export const POKEMON_INFO_FRAGMENT = gql`
  fragment PokemonInfo on Pokemon {
    id
    name
    classification
    types
    sound
    image
    isFavorite
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
  }
`
