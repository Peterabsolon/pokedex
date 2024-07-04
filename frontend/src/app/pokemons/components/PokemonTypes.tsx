import { useState } from 'react'

import { usePokemonTypesQuery } from '~/hooks'

export const PokemonTypes = () => {
  const { types } = usePokemonTypesQuery()
  const [selectedTypes, setSelectedTypes] = useState()

  return (
    <div>
      {types.map((pokemonType) => (
        <div key={pokemonType}>{pokemonType}</div>
      ))}
    </div>
  )
}
