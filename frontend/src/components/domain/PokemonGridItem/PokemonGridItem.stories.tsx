import type { Meta, StoryObj } from '@storybook/react'

import { BULBASAUR } from '~/constants/stories'

import { PokemonGridItem } from './PokemonGridItem'

const meta = {
  title: 'domain/PokemonListItem',
  component: PokemonGridItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PokemonGridItem>

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
