import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './Toggle'

const meta = {
  title: 'fields/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'yo',
    label: 'Toggle me?',
  },
}

// export const OnOffLabels: Story = {
//   args: {
//     label: 'Toggle me?',
//     labelOff: 'Off',
//     labelOn: 'On',
//   },
// }
