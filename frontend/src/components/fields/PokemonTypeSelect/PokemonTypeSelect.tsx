import { components } from 'react-select'

import { POKEMON_TYPE_COLORS } from '~/components/domain/PokemonTypeBadge/PokemonTypeBadge.constants'
import { FieldProps } from '~/components/ui'
import { PokemonType } from '~/constants/pokemonTypes'
import { usePokemonTypesQuery } from '~/hooks'

import { Select, SelectOption, SelectProps } from '../Select'

export interface PokemonTypeSelectProps<IsMulti extends boolean = boolean>
  extends Omit<SelectProps<SelectOption<string>, IsMulti, any>, 'options'>,
    FieldProps {}

export const PokemonTypeSelect = <IsMulti extends boolean = boolean>(props: PokemonTypeSelectProps<IsMulti>) => {
  const { options } = usePokemonTypesQuery()

  return (
    <Select<SelectOption<string>, IsMulti, any>
      options={options}
      {...props}
      components={{
        Option: (props) => {
          const color = POKEMON_TYPE_COLORS[props.children as PokemonType]

          return (
            <div style={{ color }}>
              <components.Option {...props} />
            </div>
          )
        },
      }}
    />
  )
}
