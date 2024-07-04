import { Meta, StoryFn } from '@storybook/react'

import { PokemonWeaknessSelect } from './PokemonWeaknessSelect'

export default {
  title: 'ui/PokemonWeaknessSelect',
  component: PokemonWeaknessSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonWeaknessSelect>

const Template: StoryFn<typeof PokemonWeaknessSelect> = (args) => <PokemonWeaknessSelect {...args} />

export const Default = Template.bind({})
Default.args = {}
