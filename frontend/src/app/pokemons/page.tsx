'use client'

import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

import { Pokemon } from './components'
import { pokemonsStore } from './pokemons.store'

const PokemonsPage = observer(() => {
  const { mount, pokemons } = pokemonsStore

  useEffect(() => mount(), [mount])

  return (
    <div>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.props.id} pokemon={pokemon} />
      ))}
    </div>
  )
})

export default PokemonsPage
