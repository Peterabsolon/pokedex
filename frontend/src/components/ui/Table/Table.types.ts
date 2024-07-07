import { ReactNode } from 'react'

import { ButtonProps } from '../Button'

export interface TableColumn<T extends AnyObject> {
  /**
   * The table header
   */
  label: string

  /**
   * Cell element className
   */
  className?: string

  /**
   * Key of the property to render.
   * Any string can be passed but IDE will autosuggest available keys from T
   * https://artsy.github.io/blog/2023/03/01/typescript-magic/
   */
  dataKey?: keyof T | (string & {})

  /**
   * Render callback
   */
  render?: (row: T) => ReactNode

  /**
   * Indicates if the column should be hidden
   */
  hidden?: boolean

  /**
   * Which side to align the column to
   */
  align?: 'left' | 'center' | 'right'

  /**
   * Table column width in pixels
   */
  width?: number
}

export interface TableAction<T extends AnyObject> extends Pick<ButtonProps, 'variant' | 'variantHover'> {
  key: string
  label: ReactNode | ((row: T) => ReactNode)
  onClick: (row: T) => void
}
