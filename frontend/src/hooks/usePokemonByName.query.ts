import { useQuery } from '@apollo/client'

import { GetPokemonByNameQuery } from '~/codegen/graphql'
import { GET_POKEMON_BY_NAME_QUERY } from '~/graphql'

export const usePokemonByNameQuery = () => {
  const pokemonByNameQuery = useQuery<GetPokemonByNameQuery>(GET_POKEMON_BY_NAME_QUERY)
  const pokemonByName = pokemonByNameQuery.data

  return {
    pokemonByNameQuery,
    pokemonByName,
  }
}
