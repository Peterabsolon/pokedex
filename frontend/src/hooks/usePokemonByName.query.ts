import { useQuery } from '@apollo/client'

import { GetPokemonByNameQuery } from '~/codegen/graphql'
import { GET_POKEMON_BY_NAME_QUERY } from '~/graphql'

interface Props {
  name: string
}

export const usePokemonByNameQuery = ({ name }: Props) => {
  const pokemonByNameQuery = useQuery<GetPokemonByNameQuery>(GET_POKEMON_BY_NAME_QUERY, { variables: { name } })
  const pokemonByName = pokemonByNameQuery.data

  return {
    pokemonByNameQuery,
    pokemonByName,
  }
}
