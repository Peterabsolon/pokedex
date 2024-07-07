import { Meta, StoryFn } from '@storybook/react'

import { NoResults } from './NoResults'

export default {
  title: 'ui/NoResults',
  component: NoResults,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof NoResults>

const Template: StoryFn<typeof NoResults> = (args) => {
  return <NoResults />
}

export const Default = Template.bind({})
Default.args = {}
