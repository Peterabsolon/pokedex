'use client'

import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { ROUTES } from '~/constants'

export interface LogoProps {
  withHomeRedirect?: boolean
}

export const Logo = ({ withHomeRedirect = true }: LogoProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (withHomeRedirect) {
      router.push(ROUTES.POKEMONS)
    }
  }

  return (
    <div className={classNames('flex items-center', { 'cursor-pointer': handleClick })}>
      <img className="mr-4 w-12" alt="Pokeball logo" src="/pokeball.svg" />
      <h1 className="font-medium text-white">Pokedex</h1>
    </div>
  )
}
