import { Button } from '../Button'
import { TableAction, TableColumn } from './Table.types'
import { TableCell } from './TableCell'

export interface TableRowProps<T extends AnyObject> {
  actions?: TableAction<T>[]
  columns: TableColumn<T>[]
  row: T
}

export const TableRow = <T extends AnyObject>({ actions, columns, row }: TableRowProps<T>) => {
  return (
    <tr>
      {columns.map((column) => {
        return <TableCell key={column.label} column={column} row={row} />
      })}

      {actions && actions.length > 0 && (
        <TableCell
          row={row}
          column={{
            label: 'Actions',
            align: 'right',
            render: (row) => (
              <div className="flex flex-wrap justify-end gap-1">
                {actions.map((action, index) => {
                  const label = typeof action.label === 'function' ? action.label(row) : action.label

                  return (
                    <Button
                      key={action.key}
                      onClick={() => action.onClick(row)}
                      variant={action.variant}
                      variantHover={action.variantHover}
                      size="sm"
                    >
                      {label}
                    </Button>
                  )
                })}
              </div>
            ),
          }}
        />
      )}
    </tr>
  )
}
