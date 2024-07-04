import { usePokemonTypesQuery } from '~/hooks'

import { Select, SelectProps } from '../Select'

export interface PokemonTypeSelectProps<IsMulti extends boolean = boolean>
  extends Omit<SelectProps<string, IsMulti, any>, 'options'> {}

export const PokemonTypeSelect = <IsMulti extends boolean = boolean>(props: PokemonTypeSelectProps<IsMulti>) => {
  const { options } = usePokemonTypesQuery()

  return <Select<string, IsMulti, any> options={options} {...props} />
}
