import classNames from 'classnames'
import { MotionProps } from 'framer-motion'
import { HTMLAttributes } from 'react'

import { Card } from '../Card'
import { NoResults } from '../NoResults'
import { TableAction, TableColumn } from './Table.types'
import { TableRow } from './TableRow'

const MOTION_PROPS: MotionProps = {
  initial: { scale: 0.97, opacity: 0, y: 10 },
  animate: { scale: 1, opacity: 1, y: 0 },
}

export interface TableProps<T extends AnyObject> extends HTMLAttributes<HTMLTableElement> {
  data: T[]
  columns: TableColumn<T>[]

  actions?: TableAction<T>[]
  onRowClick?: (row: T) => void
}

export const Table = <T extends AnyObject>({ actions, className, data, onRowClick, ...props }: TableProps<T>) => {
  const columns = props.columns.filter((column) => !column.hidden)

  return (
    <Card className={classNames('w-full p-3', className)} motion={MOTION_PROPS}>
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
              <TableRow<T> actions={actions} key={row.id} columns={columns} row={row} onRowClick={onRowClick} />
            ))}
          </tbody>
        )}
      </table>

      {!data.length && <NoResults />}
    </Card>
  )
}
