import { Meta, StoryFn } from '@storybook/react'

import { PokemonTypeSelect } from './PokemonTypeSelect'

export default {
  title: 'fields/domain/PokemonTypeSelect',
  component: PokemonTypeSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonTypeSelect>

const Template: StoryFn<typeof PokemonTypeSelect> = (args) => <PokemonTypeSelect {...args} />

export const Default = Template.bind({})
Default.args = {}
