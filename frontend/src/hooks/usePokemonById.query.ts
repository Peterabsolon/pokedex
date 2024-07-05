import { useQuery } from '@apollo/client'

import { GetPokemonByIdQuery } from '~/codegen/graphql'
import { GET_POKEMON_BY_NAME_QUERY } from '~/graphql'

export const usePokemonByIdQuery = () => {
  const pokemonByIdQuery = useQuery<GetPokemonByIdQuery>(GET_POKEMON_BY_NAME_QUERY)
  const pokemonById = pokemonByIdQuery.data

  return {
    pokemonByIdQuery,
    pokemonById,
  }
}
