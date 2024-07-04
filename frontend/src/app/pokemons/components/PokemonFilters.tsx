import { PokemonTypeSelect, PokemonWeaknessSelect } from '~/components'

import { usePokemonsContext } from '../pokemons.context'

export const PokemonFilters: React.FC = () => {
  const { state, actions, searchQuery } = usePokemonsContext()

  return (
    <div>
      <input className="text-black" value={searchQuery.input} onChange={searchQuery.onInputChange} />
      <PokemonTypeSelect<true> isMulti value={state.typesSelected} onChange={actions.setTypesSelected} />
      <PokemonWeaknessSelect<true> isMulti value={state.weaknessesSelected} onChange={actions.setWeaknessesSelected} />
    </div>
  )
}
