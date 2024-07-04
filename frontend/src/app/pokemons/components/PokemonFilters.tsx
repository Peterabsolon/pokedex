import { PokemonTypeSelect, PokemonWeaknessSelect } from '~/components'

import { usePokemonsContext } from '../pokemons.context'

export const PokemonFilters = () => {
  const { state, actions, searchQuery } = usePokemonsContext()

  return (
    <div>
      <input className="text-black" value={searchQuery.input} onChange={searchQuery.onInputChange} />

      <PokemonTypeSelect<true>
        isMulti
        value={state.pokemonTypesSelected}
        onChange={(v) => actions.setSelectedTypes(v)}
      />

      <PokemonWeaknessSelect<true>
        isMulti
        value={state.pokemonWeaknessesSelected}
        onChange={actions.setSelectedWeaknesses}
      />
    </div>
  )
}
