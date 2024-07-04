import '../assets/globals.css'

import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import { font } from '~/assets'
import { ApolloWrapper } from '~/lib/apollo.wrapper'

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
        <body className={`${font.className} flex flex-col items-stretch justify-stretch bg-slate-950`}>
          <Toaster richColors={true} position="top-right" />

          <header className="flex items-center justify-between p-8">
            <div className="flex items-center">
              <img className="mr-4 w-12" alt="Pokeball logo" src="/pokeball.svg" />
              <h1 className="font-medium">Pokedex</h1>
            </div>
          </header>

          <main className="z-20 flex flex-1 items-stretch justify-center overflow-auto px-8">{children}</main>

          <footer className="absolute inset-0 top-auto z-20 p-8 text-right">
            Made with 💜 by <a href="https://www.linkedin.com/in/peter-absolon">Peter Absolon</a>
          </footer>
        </body>
      </ApolloWrapper>
    </html>
  )
}
