import { usePokemonWeaknessesQuery } from '~/hooks'

import { ButtonSelect, ButtonSelectProps } from '../ButtonSelect'

export interface PokemonWeaknessSelectProps extends Omit<ButtonSelectProps<string>, 'options'> {}

export const PokemonWeaknessSelect = (props: PokemonWeaknessSelectProps) => {
  const { options } = usePokemonWeaknessesQuery()

  return <ButtonSelect options={options} {...props} />
}
