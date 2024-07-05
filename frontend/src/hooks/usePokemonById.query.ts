import { useQuery } from '@apollo/client'

import { GetPokemonByIdQuery } from '~/codegen/graphql'
import { GET_POKEMON_BY_ID_QUERY } from '~/graphql'

interface Props {
  id?: string
}

export const usePokemonByIdQuery = ({ id }: Props) => {
  const pokemonByIdQuery = useQuery<GetPokemonByIdQuery>(GET_POKEMON_BY_ID_QUERY, {
    variables: { id },
    skip: id === undefined,
  })

  const pokemonById = pokemonByIdQuery.data?.pokemonById

  return {
    pokemonByIdQuery,
    pokemonById,
  }
}
