'use client'

import {
  FilterOperatorSelect,
  InputDebounced,
  PokemonResistancesSelect,
  PokemonTypeSelect,
  PokemonWeaknessSelect,
} from '~/components'

import { usePokemonsContext } from '../pokemons.context'

export const PokemonFilters: React.FC = () => {
  const { state, actions } = usePokemonsContext()

  const {
    searchQuery,
    typesSelected,
    typeFilterOperator,
    weaknessesSelected,
    weaknessesFilterOperator,
    resistancesSelected,
    resistancesFilterOperator,
  } = state

  const {
    setSearchQuery,
    setTypesSelected,
    setTypeFilterOperator,
    setWeaknessesSelected,
    setWeaknessFilterOperator,
    setResistancesSelected,
    setResistancesFilterOperator,
  } = actions

  return (
    <div>
      <InputDebounced value={searchQuery} onValueChange={setSearchQuery} />

      <PokemonTypeSelect<true> label="Types" isMulti value={typesSelected} onChange={setTypesSelected} />
      <FilterOperatorSelect value={typeFilterOperator} onChange={setTypeFilterOperator} />

      <PokemonResistancesSelect<true>
        label="Resistances"
        isMulti
        value={resistancesSelected}
        onChange={setResistancesSelected}
      />
      <FilterOperatorSelect value={resistancesFilterOperator} onChange={setResistancesFilterOperator} />

      <PokemonWeaknessSelect<true>
        label="Weaknesses"
        isMulti
        value={weaknessesSelected}
        onChange={setWeaknessesSelected}
      />
      <FilterOperatorSelect value={weaknessesFilterOperator} onChange={setWeaknessFilterOperator} />
    </div>
  )
}
