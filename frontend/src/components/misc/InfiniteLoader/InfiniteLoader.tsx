import { ReactNode } from 'react'
import { Waypoint } from 'react-waypoint'

export interface InfiniteLoaderProps {
  children: ReactNode
  isLoading: boolean
  error?: Error
  pageKey: string | number
  onLoadMore: () => void
}

export const InfiniteLoader = ({ pageKey, children, isLoading, error, onLoadMore }: InfiniteLoaderProps) => {
  return (
    <div>
      {children}

      <div className="h-24">
        {isLoading && <div>Loading</div>}

        {!isLoading && pageKey !== undefined && !error && (
          <Waypoint onEnter={onLoadMore} key={pageKey}>
            <div>Loading</div>
          </Waypoint>
        )}
      </div>
    </div>
  )
}
