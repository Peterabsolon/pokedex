import { Meta, StoryFn } from '@storybook/react'

import { PokemonsContextProvider } from '../pokemons.context'
import { PokemonFilters } from './PokemonFilters'

export default {
  title: 'app/PokemonFilters',
  component: PokemonFilters,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonFilters>

const Template: StoryFn<typeof PokemonFilters> = (args) => (
  <PokemonsContextProvider>
    <PokemonFilters {...args} />
  </PokemonsContextProvider>
)

export const Default = Template.bind({})
Default.args = {}
