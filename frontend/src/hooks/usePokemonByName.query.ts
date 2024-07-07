import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { GetPokemonByNameQuery } from '~/codegen/graphql'
import { GET_POKEMON_BY_NAME_QUERY } from '~/graphql'

interface Props {
  name?: string
}

export const usePokemonByNameQuery = ({ name }: Props) => {
  const pokemonByNameQuery = useQuery<GetPokemonByNameQuery>(GET_POKEMON_BY_NAME_QUERY, {
    variables: { name },
    skip: name === undefined,
  })

  const pokemon = pokemonByNameQuery.data?.pokemonByName ?? undefined

  return useMemo(
    () => ({
      pokemonByNameQuery,
      pokemon,
    }),
    [pokemon, pokemonByNameQuery],
  )
}
