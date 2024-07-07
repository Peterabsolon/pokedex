import { ReactNode } from 'react'

export interface TableColumn<T extends AnyObject> {
  label: string
  dataKey?: keyof T | (string & {}) // https://artsy.github.io/blog/2023/03/01/typescript-magic/
  render?: (row: T) => ReactNode
}
