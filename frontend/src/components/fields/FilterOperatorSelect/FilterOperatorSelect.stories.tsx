import { Meta, StoryFn } from '@storybook/react'

import { FilterOperatorSelect } from './FilterOperatorSelect'

export default {
  title: 'fields/FilterOperatorSelect',
  component: FilterOperatorSelect,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof FilterOperatorSelect>

const Template: StoryFn<typeof FilterOperatorSelect> = (args) => <FilterOperatorSelect {...args} />

export const Default = Template.bind({})
Default.args = {}
