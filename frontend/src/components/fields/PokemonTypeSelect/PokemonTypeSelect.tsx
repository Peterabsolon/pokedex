import { usePokemonTypesQuery } from '~/hooks'

import { Select, SelectOption, SelectProps } from '../Select'

export interface PokemonTypeSelectProps<IsMulti extends boolean = boolean>
  extends Omit<SelectProps<SelectOption<string>, IsMulti, any>, 'options'> {}

export const PokemonTypeSelect = <IsMulti extends boolean = boolean>(props: PokemonTypeSelectProps<IsMulti>) => {
  const { options } = usePokemonTypesQuery()

  return <Select<SelectOption<string>, IsMulti, any> options={options} {...props} />
}
