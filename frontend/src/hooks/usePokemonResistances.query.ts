import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { GetPokemonResistancesQuery } from '~/codegen/graphql'
import { GET_POKEMON_RESISTANCES_QUERY } from '~/graphql'

export const usePokemonResistancesQuery = () => {
  const pokemonResistancesQuery = useQuery<GetPokemonResistancesQuery>(GET_POKEMON_RESISTANCES_QUERY)
  const types = useMemo(() => pokemonResistancesQuery.data?.pokemonResistances ?? [], [pokemonResistancesQuery])

  return { pokemonResistancesQuery, types }
}
