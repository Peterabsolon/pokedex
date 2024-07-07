import { InMemoryCache, TypePolicies } from '@apollo/client'
import { uniqBy } from 'lodash'

import { PokemonConnection, PokemonsQueryInput } from '~/codegen/graphql'

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      pokemons: {
        keyArgs: [
          ['filter', 'search'],
          ['filter', 'isFavorite'],
        ],

        read(existing: PokemonConnection, { args }) {
          if (!existing) {
            return undefined
          }

          // TODO: Use cache for search results too
          if (args && (args.query as PokemonsQueryInput).search) {
            return undefined
          }

          return existing
        },

        merge(existing: PokemonConnection, incoming: PokemonConnection, { args }) {
          if (!existing) return incoming
          if (!incoming) return existing

          const edges = uniqBy([...existing.edges, ...incoming.edges], '__ref')

          return {
            ...incoming,
            edges,
          }
        },
      },
    },
  },
}

export const cache = new InMemoryCache({ typePolicies })
