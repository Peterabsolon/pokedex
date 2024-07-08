import { Meta, StoryFn } from '@storybook/react'

import { AppContextProvider } from '../../../app.context'
import { PokemonsFilters } from './PokemonsFilters'

export default {
  title: 'app/PokemonsFilters',
  component: PokemonsFilters,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof PokemonsFilters>

const Template: StoryFn<typeof PokemonsFilters> = (args) => (
  <AppContextProvider>
    <PokemonsFilters {...args} />
  </AppContextProvider>
)

export const Default = Template.bind({})
Default.args = {}
