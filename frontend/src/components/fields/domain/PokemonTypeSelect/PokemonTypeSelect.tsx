import { usePokemonTypesQuery } from '~/hooks'

import { Select, SelectProps } from '../../Select'

export interface PokemonTypeSelectProps extends Omit<SelectProps<string>, 'options'> {}

export const PokemonTypeSelect = (props: PokemonTypeSelectProps) => {
  const { options } = usePokemonTypesQuery()

  return <Select options={options} {...props} />
}
