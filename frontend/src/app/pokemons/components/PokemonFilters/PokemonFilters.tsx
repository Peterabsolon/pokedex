'use client'

import { Card, FilterOperatorSelect, InputDebounced, PokemonTypeSelect, Toggle } from '~/components'

import { usePokemonsContext } from '../../pokemons.context'

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
    showDetailInfo,
  } = state

  const {
    setSearchQuery,
    setTypesSelected,
    setTypeFilterOperator,
    setWeaknessesSelected,
    setWeaknessFilterOperator,
    setResistancesSelected,
    setResistancesFilterOperator,
    toggleDetailedInfo,
  } = actions

  return (
    <Card>
      <InputDebounced
        name="searchQuery"
        label="Search by name"
        value={searchQuery}
        onValueChange={setSearchQuery}
        className="mb-4"
      />

      <Toggle label="Show detailed info" checked={showDetailInfo} onChange={toggleDetailedInfo} className="mb-4" />

      <PokemonTypeSelect<true> label="Types" isMulti value={typesSelected} onChange={setTypesSelected} />
      <FilterOperatorSelect value={typeFilterOperator} onChange={setTypeFilterOperator} className="mb-4" />

      <PokemonTypeSelect<true>
        label="Resistances"
        isMulti
        value={resistancesSelected}
        onChange={setResistancesSelected}
      />
      <FilterOperatorSelect
        value={resistancesFilterOperator}
        onChange={setResistancesFilterOperator}
        className="mb-4"
      />

      <PokemonTypeSelect<true> label="Weaknesses" isMulti value={weaknessesSelected} onChange={setWeaknessesSelected} />
      <FilterOperatorSelect value={weaknessesFilterOperator} onChange={setWeaknessFilterOperator} className="mb-4" />
    </Card>
  )
}
