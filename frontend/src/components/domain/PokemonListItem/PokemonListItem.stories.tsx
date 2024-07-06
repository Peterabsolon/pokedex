import type { Meta, StoryObj } from '@storybook/react'

import { BULBASAUR } from '~/constants/stories'

import { PokemonListItem } from './PokemonListItem'

const meta = {
  title: 'domain/PokemonListItem',
  component: PokemonListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PokemonListItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pokemon: BULBASAUR,
    showDetailInfo: false,
  },
}

export const WithDetails: Story = {
  args: {
    pokemon: BULBASAUR,
    showDetailInfo: true,
  },
}
