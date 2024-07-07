import { ReactNode } from 'react'

import { TableColumn } from './Table.types'

export interface TableCellProps<T extends Record<string, any>> {
  row: T
  column: TableColumn<T>
  children?: ReactNode
}

export const TableCell = <T extends Record<string, any>>({ row, column }: TableCellProps<T>) => {
  let value: ReactNode = ''

  if (column.dataKey) {
    value = row[column.dataKey]
  }

  if (column.render) {
    value = column.render(row)
  }

  return <td>{value}</td>
}
