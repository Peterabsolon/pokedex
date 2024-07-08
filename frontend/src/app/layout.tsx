import '../assets/globals.css'

import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import { font } from '~/assets'
import { Logo } from '~/components/domain/Logo'

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
      <body className={`${font.className} max-w-screen flex flex-col items-stretch justify-stretch bg-slate-900`}>
        <Toaster richColors={true} position="top-right" />

        <header className="fixed top-0 flex items-center justify-between p-8" style={{ height: HEADER_HEIGHT }}>
          <Logo />
        </header>

        <main className="z-30 flex flex-1 items-stretch justify-center" style={{ paddingTop: HEADER_HEIGHT }}>
          {children}
        </main>

        <footer className="fixed inset-0 top-auto z-20 p-8 text-right text-white">
          Made with 💜 by <a href="https://www.linkedin.com/in/peter-absolon">Peter Absolon</a>
        </footer>
      </body>
    </html>
  )
}
