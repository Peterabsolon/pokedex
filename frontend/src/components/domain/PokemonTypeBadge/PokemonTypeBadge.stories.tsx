import { Meta, StoryFn } from '@storybook/react'

import { POKEMON_TYPES } from '~/constants/pokemonTypes'

import { PokemonTypeBadge } from './PokemonTypeBadge'

export default {
  title: 'domain/PokemonTypeBadge',
  component: PokemonTypeBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonTypeBadge>

const Template: StoryFn<typeof PokemonTypeBadge> = (args) => {
  return (
    <div>
      {POKEMON_TYPES.map((type) => (
        <PokemonTypeBadge key={type} {...args} type={type} />
      ))}
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
