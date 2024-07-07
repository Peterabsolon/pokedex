import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import { Card } from '../Card'
import { TableAction, TableColumn } from './Table.types'
import { TableRow } from './TableRow'

export interface TableProps<T extends AnyObject> extends HTMLAttributes<HTMLTableElement> {
  actions?: TableAction<T>[]
  columns: TableColumn<T>[]
  data: T[]
}

export const Table = <T extends AnyObject>({ actions, className, data, ...props }: TableProps<T>) => {
  const columns = props.columns.filter((column) => !column.hidden)

  return (
    <Card className={classNames('w-full p-3', className)}>
      <table className={classNames('w-full table-auto border-collapse')}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.label}
                style={{ width: column.width }}
                className={classNames(
                  'border-b px-4 py-2 !font-bold',
                  `text-${column.align ?? 'left'} text-nowrap`,
                  column.className,
                )}
              >
                {column.label}
              </th>
            ))}

            {actions && actions.length > 0 && <th className="border-b px-4 py-2 text-right font-bold">Actions</th>}
          </tr>
        </thead>

        {data.length > 0 && (
          <tbody>
            {data.map((row) => (
              <TableRow<T> actions={actions} key={row.id} columns={columns} row={row} />
            ))}
          </tbody>
        )}
      </table>

      {!data.length && (
        <div className="flex w-full items-center justify-center py-16 text-lg font-bold">No results found</div>
      )}
    </Card>
  )
}
