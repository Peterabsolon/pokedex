import { ReactNode } from 'react'
import { Waypoint } from 'react-waypoint'

import { Spinner } from '~/components/ui'

export interface InfiniteLoaderProps {
  /**
   * The data or content to render.
   */
  children: ReactNode

  /**
   * Indicates whether data is currently being fetched.
   */
  isLoading: boolean

  /**
   * Error object if there was an error during data fetching.
   */
  error?: Error

  /**
   * Unique key for the current page, required for react-waypoint to function correctly.
   */
  pageKey: string | number

  /**
   * Callback function for loading data when the user reveals the Waypoint and more data is available.
   */
  onLoadMore: () => void
}

export const InfiniteLoader = ({ pageKey, children, isLoading, error, onLoadMore }: InfiniteLoaderProps) => {
  return (
    <div>
      {children}

      <div className="flex h-24 items-center justify-center">
        {isLoading && <Spinner />}

        {!isLoading && pageKey !== undefined && !error && (
          <Waypoint onEnter={onLoadMore} key={pageKey}>
            <Spinner />
          </Waypoint>
        )}
      </div>
    </div>
  )
}
