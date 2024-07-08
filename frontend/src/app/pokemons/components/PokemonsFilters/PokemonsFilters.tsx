import { useAppContext } from '~/app'
import { Card, FilterOperatorSelect, InputDebounced, PokemonTypeSelect, Toggle } from '~/components'

export const PokemonsFilters: React.FC = () => {
  const { state, actions } = useAppContext()

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
    useTableView,
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
    toggleTableView,
  } = actions

  return (
    <Card>
      <InputDebounced
        data-testid="search-query-input"
        name="searchQuery"
        label="Search"
        value={searchQuery}
        onValueChange={setSearchQuery}
        className="mb-4"
        placeholder="Search by name..."
      />

      <Toggle label="Show as table" checked={useTableView} onChange={toggleTableView} className="mb-4" />

      <Toggle
        label="Show weaknesses & resistances"
        checked={showDetailInfo}
        onChange={toggleDetailedInfo}
        className="mb-4"
      />

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
          placeholder="Select resistances..."
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
          placeholder="Select weaknesses..."
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
