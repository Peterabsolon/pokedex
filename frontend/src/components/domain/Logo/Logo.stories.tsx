import { Meta, StoryFn } from '@storybook/react'

import { Logo } from './Logo'

export default {
  title: 'ui/Logo',
  component: Logo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Logo>

const Template: StoryFn<typeof Logo> = (args) => {
  return <Logo />
}

export const Default = Template.bind({})
Default.args = {}
