import { useQuery } from '@apollo/client'
import { defaults } from 'lodash'
import { useMemo } from 'react'

import { GetPokemonsQuery, PokemonsQueryInput } from '~/codegen/graphql'
import { GET_POKEMONS_QUERY } from '~/graphql'

export const usePokemonsQuery = (queryArg?: PokemonsQueryInput) => {
  const query: PokemonsQueryInput = defaults({}, queryArg, { offset: 0, limit: 10 })
  const pokemonsQuery = useQuery<GetPokemonsQuery>(GET_POKEMONS_QUERY, { variables: { query } })
  const pokemons = useMemo(() => pokemonsQuery.data?.pokemons.edges ?? [], [pokemonsQuery])

  return { pokemonsQuery, pokemons }
}
