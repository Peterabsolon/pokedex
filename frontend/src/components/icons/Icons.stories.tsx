import { Meta } from '@storybook/react'

import { HeartIcon } from './Heart.icon'
import { TrashIcon } from './Trash.icon'

export default {
  title: 'icons',
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta

export const Default = () => (
  <div className="flex flex-wrap gap-2">
    <TrashIcon className="size-6" />
    <HeartIcon className="size-6" />
  </div>
)
