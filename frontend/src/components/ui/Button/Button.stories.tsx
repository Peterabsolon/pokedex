import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { TrashIcon } from '~/components/icons'

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

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
}

export const Text = Template.bind({})
Text.args = {
  children: 'Text',
  variant: 'text',
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Danger',
  variant: 'danger',
}

export const VariantHover = Template.bind({})
VariantHover.args = {
  children: 'Delete me?',
  variant: 'text',
  variantHover: 'danger',
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  children: 'Click me',
  variant: 'danger',
  iconLeft: <TrashIcon className="mr-2 size-5" />,
}

export const IconRight = Template.bind({})
IconRight.args = {
  children: 'Click me',
  variant: 'danger',
  iconRight: <TrashIcon className="ml-2 size-5" />,
}

export const CustomMotionProps = Template.bind({})
CustomMotionProps.args = {
  children: 'Hover me',
  motion: {
    // layout: true,
    // transition: { type: 'spring' },
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    whileHover: { scale: 1.09 },
    whileTap: { scale: 0.8 },
  },
}
