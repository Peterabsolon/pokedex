import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Input } from './Input'
import { InputDebounced } from './InputDebounced'

export default {
  title: 'fields/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Debounced = () => {
  const [value, setValue] = useState<string | undefined>()

  return (
    <div>
      <div>Value is: {value}</div>
      <InputDebounced value={value} onValueChange={setValue} />
    </div>
  )
}
