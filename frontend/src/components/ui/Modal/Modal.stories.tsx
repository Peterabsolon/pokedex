import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Modal } from './Modal'

export default {
  title: 'ui/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="h-[1000px] bg-green-400">Modal content</div>
      </Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}
