import { gql } from '@apollo/client'

import { POKEMON_INFO_FRAGMENT } from './pokemon-info.fragment'

export const POKEMON_DETAILS_FRAGMENT = gql`
  ${POKEMON_INFO_FRAGMENT}

  fragment PokemonDetails on Pokemon {
    ...PokemonInfo

    weight {
      minimum
      maximum
    }

    height {
      minimum
      maximum
    }

    evolutionRequirements {
      amount
      name
    }

    evolutions {
      id
      name
    }

    evolutionsPrevious {
      id
      name
    }

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
`
