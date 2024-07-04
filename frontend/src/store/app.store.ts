'use client'

import { toast } from 'sonner'

import { createApolloClient } from '~/lib/apollo.client'

class AppStore {
  toast = toast
  apollo = createApolloClient()
}

export const app = new AppStore()
