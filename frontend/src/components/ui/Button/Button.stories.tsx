import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Button } from './Button'

export default {
  title: 'ui/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Click me',
}
