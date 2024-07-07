import { InMemoryCache, TypePolicies } from '@apollo/client'

import { pokemonsQueryFieldPolicy } from '~/graphql/fieldPolicies'

export const typePolicies: TypePolicies = {
  Query: {
    fields: {
      pokemons: pokemonsQueryFieldPolicy,
    },
  },
}

export const cache = new InMemoryCache({ typePolicies })
