import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import { Field } from './Field'

export default {
  title: 'ui/Field',
  component: Field,
} as Meta<typeof Field>

const Template: StoryFn<typeof Field> = (args) => <Field {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <input />,
  label: 'Foo',
  name: 'foo',
}
