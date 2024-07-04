import { PokemonTypeSelect, PokemonWeaknessSelect } from '~/components'

import { usePokemonsContext } from '../pokemons.context'

export const PokemonFilters = () => {
  const { state, actions } = usePokemonsContext()

  return (
    <div>
      <PokemonTypeSelect value={state.pokemonTypesSelected} onChange={actions.setSelectedTypes} />
      <PokemonWeaknessSelect value={state.pokemonWeaknessesSelected} onChange={actions.setSelectedWeaknesses} />

      <PokemonWeaknessSelect />
    </div>
  )
}
