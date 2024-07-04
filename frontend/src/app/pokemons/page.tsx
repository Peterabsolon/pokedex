'use client'

import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

import { pokemons } from './pokemons.store'

const PokemonsPage = observer(() => {
  useEffect(() => pokemons.mount(), [])

  return <div>PokemonsPage</div>
})

export default PokemonsPage
