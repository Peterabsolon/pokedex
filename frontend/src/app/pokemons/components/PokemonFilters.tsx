import { PokemonTypeSelect, PokemonWeaknessSelect } from '~/components'

export interface PokemonFiltersProps {
  foo?: string
}

export const PokemonFilters = ({ foo }: PokemonFiltersProps) => {
  console.log({ foo })

  return (
    <div>
      <PokemonTypeSelect />
      <PokemonWeaknessSelect />
    </div>
  )
}
