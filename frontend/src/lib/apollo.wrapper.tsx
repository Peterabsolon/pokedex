'use client'

/* TODO: Use NextJS 14 template.tsx, which is client-side, so this can be run on server */

import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support'

import { typePolicies } from './apollo.cache'

const API_URL = process.env.NEXT_PUBLIC_API_URL

function makeClient() {
  const httpLink = new HttpLink({ uri: API_URL })

  return new ApolloClient({
    cache: new InMemoryCache({ typePolicies }),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), httpLink])
        : httpLink,
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
