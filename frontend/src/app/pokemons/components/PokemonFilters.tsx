'use client'

import { InputDebounced, PokemonTypeSelect, PokemonWeaknessSelect } from '~/components'

import { usePokemonsContext } from '../pokemons.context'

export const PokemonFilters: React.FC = () => {
  const { state, actions } = usePokemonsContext()

  return (
    <div>
      <InputDebounced value={state.searchQuery} onValueChange={actions.setSearchQuery} />
      <PokemonTypeSelect<true> isMulti value={state.typesSelected} onChange={actions.setTypesSelected} />
      <PokemonWeaknessSelect<true> isMulti value={state.weaknessesSelected} onChange={actions.setWeaknessesSelected} />
    </div>
  )
}
