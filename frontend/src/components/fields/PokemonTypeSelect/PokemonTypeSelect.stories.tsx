import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { SelectOption } from '../Select'
import { PokemonTypeSelect } from './PokemonTypeSelect'

export default {
  title: 'fields/PokemonTypeSelect',
  component: PokemonTypeSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonTypeSelect>

const Template: StoryFn<typeof PokemonTypeSelect> = () => {
  const [value, setValue] = useState<readonly SelectOption<string>[]>([])

  return <PokemonTypeSelect<true> value={value} onChange={setValue} />
}

export const Default = Template.bind({})
Default.args = {}
