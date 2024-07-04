import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { GetPokemonWeaknessesQuery } from '~/codegen/graphql'
import { GET_POKEMON_WEAKNESSES_QUERY } from '~/graphql'

export const usePokemonWeaknessesQuery = () => {
  const pokemonWeaknessesQuery = useQuery<GetPokemonWeaknessesQuery>(GET_POKEMON_WEAKNESSES_QUERY)
  const types = useMemo(() => pokemonWeaknessesQuery.data?.pokemonWeaknesses ?? [], [pokemonWeaknessesQuery])

  return { pokemonWeaknessesQuery, types }
}
