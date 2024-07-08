import { Meta, StoryFn } from '@storybook/react'

import { BULBASAUR } from '~/constants/stories'

import { PokemonActions } from './PokemonActions'

export default {
  title: 'domain/PokemonActions',
  component: PokemonActions,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} as Meta<typeof PokemonActions>

const Template: StoryFn<typeof PokemonActions> = (args) => {
  return <PokemonActions pokemon={BULBASAUR} />
}

export const Default = Template.bind({})
Default.args = {}
