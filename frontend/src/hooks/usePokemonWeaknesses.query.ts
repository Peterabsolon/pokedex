import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { GetPokemonWeaknessesQuery } from '~/codegen/graphql'
import { GET_POKEMON_WEAKNESSES_QUERY } from '~/graphql'

export const usePokemonWeaknessesQuery = () => {
  const pokemonWeaknessesQuery = useQuery<GetPokemonWeaknessesQuery>(GET_POKEMON_WEAKNESSES_QUERY)

  const types = useMemo(() => pokemonWeaknessesQuery.data?.pokemonWeaknesses ?? [], [pokemonWeaknessesQuery])

  const options = useMemo(
    () => types.map((t) => ({ value: t, label: t })).sort((a, b) => a.label.localeCompare(b.label)),
    [types],
  )

  return { pokemonWeaknessesQuery, types, options }
}
