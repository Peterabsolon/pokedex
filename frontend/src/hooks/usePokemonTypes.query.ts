import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

import { GetPokemonTypesQuery } from '~/codegen/graphql'
import { GET_POKEMON_TYPES_QUERY } from '~/graphql'

export const usePokemonTypesQuery = () => {
  const pokemonTypesQuery = useQuery<GetPokemonTypesQuery>(GET_POKEMON_TYPES_QUERY)

  const types = useMemo(() => pokemonTypesQuery.data?.pokemonTypes ?? [], [pokemonTypesQuery])

  const options = useMemo(
    () => types.map((t) => ({ value: t, label: t })).sort((a, b) => a.label.localeCompare(b.label)),
    [types],
  )

  return useMemo(() => ({ pokemonTypesQuery, types, options }), [pokemonTypesQuery, types, options])
}
