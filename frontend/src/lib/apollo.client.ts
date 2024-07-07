// Didn't ended up using server components fetching/actions but keeping it here just in case

import { ApolloClient, HttpLink } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'

import { cache } from './apollo.cache'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache,
    link: new HttpLink({ uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql` }),
  })
})
