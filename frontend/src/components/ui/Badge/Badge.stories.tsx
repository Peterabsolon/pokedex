import { Meta, StoryFn } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'ui/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {}

export const CustomColor = Template.bind({})
CustomColor.args = {
  color: '#00ffff',
}
