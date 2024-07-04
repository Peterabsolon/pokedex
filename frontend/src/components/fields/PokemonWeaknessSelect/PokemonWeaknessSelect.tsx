import { usePokemonWeaknessesQuery } from '~/hooks'

import { Select, SelectProps } from '../Select'

export interface PokemonWeaknessSelectProps<IsMulti extends boolean = false>
  extends Omit<SelectProps<string, IsMulti, any>, 'options'> {}

export const PokemonWeaknessSelect = <IsMulti extends boolean = false>(props: PokemonWeaknessSelectProps<IsMulti>) => {
  const { options } = usePokemonWeaknessesQuery()

  return <Select<string, IsMulti, any> options={options} {...props} />
}
