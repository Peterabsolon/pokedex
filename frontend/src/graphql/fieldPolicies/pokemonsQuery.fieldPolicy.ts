/**
 * TODO: This could use more love.
 *
 * I've burned lot of time trying to make caching work perfectly, decided to focus on other things instead.
 */

import { FieldFunctionOptions, FieldPolicy } from '@apollo/client'
import { uniqBy } from 'lodash'

import { PokemonConnection, QueryPokemonsArgs } from '~/codegen/graphql'

export const pokemonsQueryFieldPolicy: FieldPolicy<
  PokemonConnection,
  PokemonConnection,
  PokemonConnection,
  FieldFunctionOptions<Partial<QueryPokemonsArgs>>
> = {
  keyArgs: false,

  // TODO: Cache search/filter results...
  // keyArgs: [
  //   ['query', ['search']],
  //   ['query', ['filter']],
  // ],

  read(existing, { args }) {
    if (!existing || !args) {
      return undefined
    }

    // Always search/filter on the server
    if (args?.query) {
      const { search, filter } = args.query

      // TODO: Improve somehow...
      if (search || filter?.type?.length || filter?.resistance?.length || filter?.weakness?.length) {
        return undefined
      }
    }

    return existing
  },

  merge(existing, incoming) {
    if (!existing) return incoming
    if (!incoming) return existing

    const edges = uniqBy([...existing.edges, ...incoming.edges], '__ref')

    return {
      ...incoming,
      count: Math.max(existing.count, incoming.count),
      edges,
    }
  },
}
