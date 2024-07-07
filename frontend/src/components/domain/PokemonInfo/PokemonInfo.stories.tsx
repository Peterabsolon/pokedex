import { Meta, StoryFn } from '@storybook/react'

import { BULBASAUR } from '~/constants/stories'

import { PokemonInfo } from './PokemonInfo'

export default {
  title: 'domain/PokemonInfo',
  component: PokemonInfo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonInfo>

const Template: StoryFn<typeof PokemonInfo> = (args) => {
  return <PokemonInfo pokemon={BULBASAUR} showDetailInfo={args.showDetailInfo} />
}

export const Default = Template.bind({})
Default.args = {}

export const WithDetails = Template.bind({})
WithDetails.args = {
  showDetailInfo: true,
}
