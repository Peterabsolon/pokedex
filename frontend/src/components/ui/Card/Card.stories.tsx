import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  title: 'ui/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Card',
  },
}

export const CustomMotion: Story = {
  args: {
    children: 'Custom motion - hover me',
    motion: {
      transition: { type: 'spring' },
      whileHover: { scale: 2, rotate: 5 },
    },
  },
}
