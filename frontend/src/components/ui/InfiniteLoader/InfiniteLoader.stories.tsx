import { Meta, StoryFn } from '@storybook/react'
import { times } from 'lodash'
import { useState } from 'react'

import { InfiniteLoader } from './InfiniteLoader'

export default {
  title: 'ui/InfiniteLoader',
  component: InfiniteLoader,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} as Meta<typeof InfiniteLoader>

const Template: StoryFn<typeof InfiniteLoader> = (args) => {
  const [data, setData] = useState(times(10))
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = async () => {
    setIsLoading(true)
    await sleep(500)
    setData((d) => [...d, ...times(10)])
    setIsLoading(false)
  }

  const pageKey = data.length % 10
  const hasMore = pageKey <= 10

  return (
    <div>
      <span>Scroll to &quot;fetch&quot; more...</span>

      <div className="h-[500px] w-[500px] overflow-y-auto">
        <InfiniteLoader onLoadMore={handleLoadMore} isLoading={isLoading} pageKey={pageKey} hasMore={hasMore}>
          {data.map((_, index) => (
            <div className="border px-5 py-16" key={index}>
              Item #{index}
            </div>
          ))}
        </InfiniteLoader>
      </div>
    </div>
  )
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Default = Template.bind({})
Default.args = {}
