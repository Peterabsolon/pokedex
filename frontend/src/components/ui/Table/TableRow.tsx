import { TableColumn } from './Table.types'
import { TableCell } from './TableCell'

export interface TableRowProps<T extends AnyObject> {
  columns: TableColumn<T>[]
  row: T
}

export const TableRow = <T extends AnyObject>({ row, columns }: TableRowProps<T>) => {
  return (
    <tr>
      {columns.map((column) => {
        return <TableCell key={column.label} column={column} row={row} />
      })}
    </tr>
  )
}
