import { Meta, StoryFn } from '@storybook/react'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

import { Alert } from './Alert'

export default {
  title: 'ui/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Alert>

const Template: StoryFn<typeof Alert> = (args) => {
  const [toggled, setToggled] = useState(true)

  const toggleBtn = (
    <button className="absolute top-0" onClick={() => setToggled((t) => !t)}>
      Toggle
    </button>
  )

  return (
    <div className="relative size-64">
      {toggleBtn}

      <div className="absolute top-10">
        <AnimatePresence>{toggled && <Alert key="alert" {...args} />}</AnimatePresence>
      </div>
    </div>
  )
}

export const Info = Template.bind({})
Info.args = {
  children: 'Info alert',
}

export const Success = Template.bind({})
Success.args = {
  level: 'success',
  children: 'Info alert',
}

export const Error = Template.bind({})
Error.args = {
  level: 'error',
  children: 'Error alert',
}
