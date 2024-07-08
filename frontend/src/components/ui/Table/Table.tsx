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

  label?: string
  loading?: boolean
  actions?: TableAction<T>[]
  actionsWidth?: number
  onRowClick?: (row: T) => void
  keyProp?: keyof T
}

export const Table = <T extends AnyObject>({
  actions,
  actionsWidth,
  className,
  data,
  onRowClick,
  loading,
  label,
  keyProp = 'id',
  ...props
}: TableProps<T>) => {
  const columns = props.columns.filter((column) => !column.hidden)

  return (
    <Card className={classNames('w-full p-3', className)} motion={MOTION_PROPS}>
      {label && <h3 className="mb-2 pl-3 text-lg font-bold">{label}</h3>}

      <table className={classNames('w-full table-auto border-collapse')}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.label}
                style={{ width: column.width }}
                className={classNames(
                  'whitespace-nowrap text-nowrap border-b px-4 py-2 !font-bold',
                  {
                    'text-left': !column.align || column.align === 'left',
                    'text-center': column.align === 'center',
                  },
                  column.className,
                )}
              >
                {column.label}
              </th>
            ))}

            {actions && actions.length > 0 && (
              <th style={{ width: actionsWidth }} className="border-b px-4 py-2 text-right font-bold">
                Actions
              </th>
            )}
          </tr>
        </thead>

        {data.length > 0 && (
          <tbody>
            {data.map((row) => (
              <TableRow<T>
                key={row[keyProp]}
                actions={actions}
                actionsWidth={actionsWidth}
                columns={columns}
                row={row}
                onRowClick={onRowClick}
              />
            ))}
          </tbody>
        )}
      </table>

      {data && !data.length && !loading && <NoResults />}
    </Card>
  )
}
