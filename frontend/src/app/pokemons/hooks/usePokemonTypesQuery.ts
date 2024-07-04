import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { GetPokemonTypesQuery } from '~/gql/graphql'

import { GET_POKEMON_TYPES_QUERY } from '../graphql'

export const usePokemonTypesQuery = () => {
  const pokemonTypesQuery = useQuery<GetPokemonTypesQuery>(GET_POKEMON_TYPES_QUERY)
  const types = useMemo(() => pokemonTypesQuery.data ?? [], [pokemonTypesQuery])

  return { pokemonTypesQuery, types }
}
