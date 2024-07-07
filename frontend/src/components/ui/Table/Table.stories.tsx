import { Meta, StoryFn } from '@storybook/react'

import { Table } from './Table'

export default {
  title: 'ui/Table',
  component: Table,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Table>

const DATA = [
  { id: 1, name: 'Apple', count: 20 },
  { id: 2, name: 'Banana', count: 20 },
  { id: 3, name: 'Orange', count: 20 },
]

type Fruit = (typeof DATA)[number]

const Template: StoryFn<typeof Table> = (args) => {
  return (
    <Table<Fruit>
      data={DATA}
      columns={[
        { label: 'ID', dataKey: 'id' },
        { label: 'Name', dataKey: 'name' },
        { label: 'Count', dataKey: 'count' },
      ]}
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
