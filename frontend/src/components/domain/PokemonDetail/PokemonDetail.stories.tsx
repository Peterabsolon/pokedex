import { Meta, StoryFn } from '@storybook/react'

import { BULBASAUR } from '~/constants/stories'

import { PokemonDetail } from './PokemonDetail'

export default {
  title: 'domain/PokemonDetail',
  component: PokemonDetail,
  parameters: {
    layout: 'centered',
    nextjs: { appDirectory: true },
  },
  tags: ['autodocs'],
} as Meta<typeof PokemonDetail>

const Template: StoryFn<typeof PokemonDetail> = (args) => {
  return <PokemonDetail pokemon={BULBASAUR} />
}

export const Default = Template.bind({})
Default.args = {}
