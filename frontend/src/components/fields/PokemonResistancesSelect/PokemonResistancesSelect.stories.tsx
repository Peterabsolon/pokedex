import { Meta, StoryFn } from '@storybook/react'

import { PokemonResistancesSelect } from './PokemonResistancesSelect'

export default {
  title: 'ui/PokemonResistancesSelect',
  component: PokemonResistancesSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonResistancesSelect>

const Template: StoryFn<typeof PokemonResistancesSelect> = (args) => <PokemonResistancesSelect {...args} />

export const Default = Template.bind({})
Default.args = {}
