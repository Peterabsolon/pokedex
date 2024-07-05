'use client'

import { usePokemonResistancesQuery } from '~/hooks'

import { Select, SelectOption, SelectProps } from '../Select'

export interface PokemonResistancesSelectProps<IsMulti extends boolean = false>
  extends Omit<SelectProps<SelectOption<string>, IsMulti, any>, 'options'> {}

export const PokemonResistancesSelect = <IsMulti extends boolean = false>(
  props: PokemonResistancesSelectProps<IsMulti>,
) => {
  const { options } = usePokemonResistancesQuery()

  return <Select<SelectOption<string>, IsMulti, any> options={options} {...props} />
}
