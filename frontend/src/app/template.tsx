'use client'

import { ApolloWrapper } from '~/lib/apollo.wrapper'

import { AppContextProvider } from './app.context'

interface RootTemplateProps {
  children: React.ReactNode
}

export default function RootTemplate({ children }: RootTemplateProps) {
  return (
    <ApolloWrapper>
      <AppContextProvider>{children}</AppContextProvider>
    </ApolloWrapper>
  )
}
