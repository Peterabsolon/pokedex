'use client'

import { FilterOperatorSelect, InputDebounced, PokemonTypeSelect, PokemonWeaknessSelect } from '~/components'

import { usePokemonsContext } from '../pokemons.context'

export const PokemonFilters: React.FC = () => {
  const { state, actions } = usePokemonsContext()

  return (
    <div>
      <InputDebounced value={state.searchQuery} onValueChange={actions.setSearchQuery} />

      <PokemonTypeSelect<true> isMulti value={state.typesSelected} onChange={actions.setTypesSelected} />
      <FilterOperatorSelect value={state.typeFilterOperator} onChange={actions.setTypeFilterOperator} />

      <PokemonWeaknessSelect<true> isMulti value={state.weaknessesSelected} onChange={actions.setWeaknessesSelected} />
      <FilterOperatorSelect value={state.weaknessesFilterOperator} onChange={actions.setWeaknessFilterOperator} />
    </div>
  )
}
