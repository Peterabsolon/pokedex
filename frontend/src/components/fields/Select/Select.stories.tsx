import type { Meta } from '@storybook/react'
import { useState } from 'react'

import { Select } from './Select'

const meta = {
  title: 'fields/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

const OPTIONS = [
  {
    value: 'Apple',
    label: 'Apple',
  },
  {
    value: 'Banana',
    label: 'Banana',
  },
]

const Template = () => {
  const [value, setValue] = useState('banana')

  return <Select value={value} onChange={setValue} options={OPTIONS} />
}

export const Default = Template.bind({})
