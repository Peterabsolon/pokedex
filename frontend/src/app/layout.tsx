import '../assets/globals.css'

import type { Metadata } from 'next'

import { font } from '~/assets'

export const metadata: Metadata = {
  title: 'Pokedex',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${font.className} flex flex-col items-stretch justify-stretch bg-slate-950`}>
        <header>Header</header>
        <main className="z-20 flex flex-1 items-stretch justify-center overflow-auto px-8">{children}</main>
        <header>Footer</header>
      </body>
    </html>
  )
}
