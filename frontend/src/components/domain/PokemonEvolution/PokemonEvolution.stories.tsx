import { Meta, StoryFn } from '@storybook/react'

import { PokemonEvolution } from './PokemonEvolution'

export default {
  title: 'domain/PokemonEvolution',
  component: PokemonEvolution,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonEvolution>

const Template: StoryFn<typeof PokemonEvolution> = (args) => <PokemonEvolution {...args} />

export const Default = Template.bind({})
Default.args = {}
