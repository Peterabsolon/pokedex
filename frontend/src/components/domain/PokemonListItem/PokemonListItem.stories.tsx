import type { Meta, StoryObj } from '@storybook/react'

import { PokemonInfoFragment } from '~/codegen/graphql'

import { PokemonListItem } from './PokemonListItem'

const POKEMON = {
  id: '001',
  number: 1,
  sound: '',
  image: '',
  isFavorite: false,
  name: 'Bulbasaur',
  classification: 'Seed Pokémon',
  types: ['Grass', 'Poison'],
  resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
  weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  fleeRate: 0.1,
  maxCP: 951,
  maxHP: 1071,
} satisfies PokemonInfoFragment

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
    pokemon: POKEMON,
    showDetailInfo: false,
  },
}

export const WithDetails: Story = {
  args: {
    pokemon: POKEMON,
    showDetailInfo: true,
  },
}
