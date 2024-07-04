import { Meta, StoryFn } from '@storybook/react'

import { Select } from './Select'

export default {
  title: 'fields/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Default = Template.bind({})
Default.args = {}
