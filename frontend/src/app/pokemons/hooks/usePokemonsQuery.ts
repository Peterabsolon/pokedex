import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { GetPokemonsQuery } from '~/gql/graphql'

import { GET_POKEMONS_QUERY } from '../graphql'

export const usePokemonsQuery = () => {
  const pokemonsQuery = useQuery<GetPokemonsQuery>(GET_POKEMONS_QUERY)
  const pokemons = useMemo(() => pokemonsQuery.data?.pokemons.edges ?? [], [pokemonsQuery])

  return { pokemonsQuery, pokemons }
}
