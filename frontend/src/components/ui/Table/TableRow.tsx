import { TableAction, TableColumn } from './Table.types'
import { TableActions } from './TableActions'
import { TableCell } from './TableCell'

export interface TableRowProps<T extends AnyObject> {
  row: T
  columns: TableColumn<T>[]

  actions?: TableAction<T>[]
  actionsWidth?: number
  onRowClick?: (row: T) => void
}

export const TableRow = <T extends AnyObject>({
  actions,
  actionsWidth,
  columns,
  row,
  onRowClick,
}: TableRowProps<T>) => {
  return (
    <tr>
      {columns.map((column) => {
        return <TableCell key={column.label} column={column} row={row} onRowClick={onRowClick} />
      })}

      {actions && actions.length > 0 && <TableActions<T> row={row} actions={actions} actionsWidth={actionsWidth} />}
    </tr>
  )
}
