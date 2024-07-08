import classNames from 'classnames'
import { ReactNode } from 'react'

import { TableColumn } from './Table.types'

export interface TableCellProps<T extends Record<string, any>> {
  row: T
  column: TableColumn<T>
  children?: ReactNode
  onRowClick?: (row: T) => void
}

export const TableCell = <T extends Record<string, any>>({ row, column, onRowClick }: TableCellProps<T>) => {
  let value: ReactNode = ''

  if (column.dataKey) {
    value = row[column.dataKey]
  }

  if (column.render) {
    value = column.render(row)
  }

  const handleClick = () => {
    if (onRowClick) {
      onRowClick(row)
    }
  }

  return (
    <td
      onClick={handleClick}
      className={classNames(
        'border-b p-4',
        {
          'text-left': column.align === 'left',
          'text-center': column.align === 'center',
          'cursor-pointer': onRowClick,
        },
        column.className,
      )}
    >
      {value}
    </td>
  )
}
