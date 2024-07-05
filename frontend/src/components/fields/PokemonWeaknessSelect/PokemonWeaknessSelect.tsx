'use client'

import { usePokemonWeaknessesQuery } from '~/hooks'

import { Select, SelectOption, SelectProps } from '../Select'

export interface PokemonWeaknessSelectProps<IsMulti extends boolean = false>
  extends Omit<SelectProps<SelectOption<string>, IsMulti, any>, 'options'> {}

export const PokemonWeaknessSelect = <IsMulti extends boolean = false>(props: PokemonWeaknessSelectProps<IsMulti>) => {
  const { options } = usePokemonWeaknessesQuery()

  return <Select<SelectOption<string>, IsMulti, any> options={options} {...props} />
}
