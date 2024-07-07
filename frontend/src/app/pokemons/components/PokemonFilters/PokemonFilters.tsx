import { Card, FilterOperatorSelect, InputDebounced, PokemonTypeSelect, Toggle } from '~/components'

import { usePokemonsContext } from '../../pokemons.context'

export const PokemonFilters: React.FC = () => {
  const { state, actions } = usePokemonsContext()

  const {
    resistancesFilterOperator,
    resistancesSelected,
    searchQuery,
    showDetailInfo,
    showFavoritesOnly,
    typeFilterOperator,
    typesSelected,
    weaknessesFilterOperator,
    weaknessesSelected,
  } = state

  const {
    setResistancesFilterOperator,
    setResistancesSelected,
    setSearchQuery,
    setTypeFilterOperator,
    setTypesSelected,
    setWeaknessesSelected,
    setWeaknessFilterOperator,
    toggleDetailedInfo,
    toggleShowFavoritesOnly,
  } = actions

  return (
    <Card>
      <InputDebounced
        data-testid="search-query-input"
        name="searchQuery"
        label="Search by name"
        value={searchQuery}
        onValueChange={setSearchQuery}
        className="mb-4"
      />

      <Toggle label="Show detailed info" checked={showDetailInfo} onChange={toggleDetailedInfo} className="mb-4" />

      <Toggle
        label="Show favorites only"
        checked={showFavoritesOnly}
        onChange={toggleShowFavoritesOnly}
        className="mb-4"
      />

      <div className="mb-4 flex gap-2">
        <PokemonTypeSelect<true>
          name="types"
          label="Types"
          placeholder="Select types..."
          isMulti
          value={typesSelected}
          onChange={setTypesSelected}
        />

        <FilterOperatorSelect
          label="&nbsp;"
          name="typesFilterOperator"
          value={typeFilterOperator}
          onChange={setTypeFilterOperator}
          fieldClassName="!w-32"
        />
      </div>

      <div className="mb-4 flex gap-2">
        <PokemonTypeSelect<true>
          name="resistances"
          label="Resistances"
          isMulti
          value={resistancesSelected}
          onChange={setResistancesSelected}
        />

        <FilterOperatorSelect
          label="&nbsp;"
          value={resistancesFilterOperator}
          onChange={setResistancesFilterOperator}
          fieldClassName="!w-32"
        />
      </div>

      <div className="mb-4 flex gap-2">
        <PokemonTypeSelect<true>
          label="Weaknesses"
          isMulti
          value={weaknessesSelected}
          onChange={setWeaknessesSelected}
        />

        <FilterOperatorSelect
          label="&nbsp;"
          value={weaknessesFilterOperator}
          onChange={setWeaknessFilterOperator}
          fieldClassName="!w-32"
        />
      </div>
    </Card>
  )
}
