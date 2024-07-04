import { Meta } from '@storybook/react'
import { useState } from 'react'
import { MultiValue, PropsValue } from 'react-select'

import { Select, SelectOption } from './Select'

export default {
  title: 'fields/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Select<true>>

const OPTIONS = [
  { value: 'Apple', label: 'Apple' },
  { value: 'Banana', label: 'Banana' },
  { value: 'Cranberry', label: 'Cranberry' },
]

export const Single = () => {
  const [value, setValue] = useState<PropsValue<SelectOption<string>>>()

  return <Select<{ value: string; label: string }> options={OPTIONS} value={value} onChange={setValue} />
}

export const Multi = () => {
  const [value, setValue] = useState<MultiValue<SelectOption<string>>>()

  return <Select<{ value: string; label: string }, true> isMulti options={OPTIONS} value={value} onChange={setValue} />
}
