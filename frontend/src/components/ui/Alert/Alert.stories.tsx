import { Meta, StoryFn } from '@storybook/react'

import { Alert } from './Alert'

export default {
  title: 'ui/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Alert>

const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />

export const Info = Template.bind({})
Info.args = {
  level: 'info',
  children: 'Info alert',
}

export const Success = Template.bind({})
Success.args = {
  level: 'success',
  children: 'Success alert',
}

export const Error = Template.bind({})
Error.args = {
  level: 'error',
  children: 'Error alert',
}
