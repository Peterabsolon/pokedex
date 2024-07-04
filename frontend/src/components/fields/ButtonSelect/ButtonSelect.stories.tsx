import type { Meta } from '@storybook/react'
import { useState } from 'react'

import { ButtonSelect } from './ButtonSelect'

const meta = {
  title: 'fields/ButtonSelect',
  component: ButtonSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonSelect>

export default meta

const OPTIONS = [
  { value: 'Apple', label: 'Apple' },
  { value: 'Banana', label: 'Banana' },
  { value: 'Cranberry', label: 'Cranberry' },
]

const Template = () => {
  const [value, setValue] = useState('banana')

  return <ButtonSelect value={value} onChange={setValue} options={OPTIONS} />
}

export const Default = Template.bind({})
