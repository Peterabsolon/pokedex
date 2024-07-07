import { Button } from '../Button'
import { TableAction } from './Table.types'
import { TableCell } from './TableCell'

export interface TableActionsProps<T extends AnyObject> {
  row: T
  actions?: TableAction<T>[]
}

export const TableActions = <T extends AnyObject>({ actions = [], row }: TableActionsProps<T>) => {
  return (
    <TableCell
      row={row}
      column={{
        label: 'Actions',
        align: 'right',
        render: (row) => (
          <div className="flex flex-wrap justify-end gap-1">
            {actions.map((action) => {
              const label = typeof action.label === 'function' ? action.label(row) : action.label

              return (
                <Button
                  stopPropagation
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
  )
}
