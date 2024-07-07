/**
 * TODO: This could use more love.
 *
 * I would very much like to have this working perfectly. However, I burnt lot of time already on doing so, and since
 * infinite scrolling was an optional objective, this will have to do.
 *
 * The Apollo documentation is not particularly extensive on caching and I gave up trying to make cache work
 * when searching/filtering... My apologies.
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

      // TODO: Fixme
      if (search || filter?.type?.length || filter?.resistance?.length || filter?.weakness?.length) {
        return undefined
      }
    }

    return existing
  },

  merge(existing, incoming) {
    if (!existing) return incoming
    if (!incoming) return existing

    // TODO: Fixme
    const edges = uniqBy([...existing.edges, ...incoming.edges], '__ref')

    return {
      ...incoming,
      // TODO: Fixme
      count: Math.max(existing.count, incoming.count),
      edges,
    }
  },
}
