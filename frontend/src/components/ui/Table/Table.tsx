import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import { TableColumn } from './Table.types'
import { TableRow } from './TableRow'

export interface TableProps<T extends AnyObject> extends HTMLAttributes<HTMLTableElement> {
  data: T[]
  columns: TableColumn<T>[]
}

export const Table = <T extends AnyObject>({ data, columns, className, ...props }: TableProps<T>) => {
  return (
    <table className={classNames('', className)}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.label}>{column.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} columns={columns} row={row} />
        ))}
      </tbody>
    </table>
  )
}
