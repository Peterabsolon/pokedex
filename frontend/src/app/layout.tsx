import '../assets/globals.css'

import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import { font } from '~/assets'
import { ApolloWrapper } from '~/lib/apollo.wrapper'

import { HEADER_HEIGHT } from './layout.constants'

export const metadata: Metadata = {
  title: 'Pokedex',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <ApolloWrapper>
        <body className={`${font.className} max-w-screen flex flex-col items-stretch justify-stretch bg-slate-900`}>
          <Toaster richColors={true} position="top-right" />

          <header className="fixed top-0 flex items-center justify-between p-8" style={{ height: HEADER_HEIGHT }}>
            <div className="flex items-center">
              <img className="mr-4 w-12" alt="Pokeball logo" src="/pokeball.svg" />
              <h1 className="font-medium text-white">Pokedex</h1>
            </div>
          </header>

          <main className="z-30 flex flex-1 items-stretch justify-center" style={{ paddingTop: HEADER_HEIGHT }}>
            {children}
          </main>

          <footer className="fixed inset-0 top-auto z-20 p-8 text-right text-white">
            Made with 💜 by <a href="https://www.linkedin.com/in/peter-absolon">Peter Absolon</a>
          </footer>
        </body>
      </ApolloWrapper>
    </html>
  )
}
