import { usePokemonTypesQuery } from '~/hooks'

import { ButtonSelect, ButtonSelectProps } from '../ButtonSelect'

export interface PokemonTypeSelectProps extends Omit<ButtonSelectProps<string>, 'options'> {}

export const PokemonTypeSelect = (props: PokemonTypeSelectProps) => {
  const { options } = usePokemonTypesQuery()

  return <ButtonSelect options={options} {...props} />
}
