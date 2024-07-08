import classNames from 'classnames'
import { components } from 'react-select'

import { PokemonTypeBadge } from '~/components/domain'
import { FieldProps } from '~/components/ui'
import { PokemonType } from '~/constants'
import { usePokemonTypesQuery } from '~/hooks'

import { Select, SelectOption, SelectProps } from '../Select'

export interface PokemonTypeSelectProps<IsMulti extends boolean = boolean>
  extends Omit<SelectProps<SelectOption<string>, IsMulti, any>, 'options'>,
    FieldProps {}

export const PokemonTypeSelect = <IsMulti extends boolean = boolean>(props: PokemonTypeSelectProps<IsMulti>) => {
  const { options } = usePokemonTypesQuery()

  return (
    <Select<SelectOption<string>, IsMulti, any>
      {...props}
      options={options}
      components={{
        MultiValue: (props) => {
          const handleRemove = (e: React.MouseEvent<HTMLDivElement>) => props.removeProps?.onClick?.(e)

          return (
            <components.MultiValue {...props} getStyles={() => ({})}>
              <PokemonTypeBadge
                className="m-1"
                onClick={handleRemove}
                onRemove={handleRemove}
                type={props.data.value as PokemonType}
              />
            </components.MultiValue>
          )
        },

        MultiValueRemove: () => null,

        Option: (props) => {
          return (
            <components.Option {...props} className={classNames(props.className, '!flex')}>
              <PokemonTypeBadge onClick={props.innerProps.onClick} type={props.data.value as PokemonType} />
            </components.Option>
          )
        },
      }}
    />
  )
}
