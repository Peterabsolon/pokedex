import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

export const useDebouncedValue = () => {
  const [value, setValue] = useState('')
  const [input, setInput] = useState('')

  const setValueDebounced = useMemo(() => debounce((value: string) => setValue(value), 500), [])

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const valueNew = event.target.value
      setInput(valueNew)
      setValueDebounced(valueNew)
    },
    [setValueDebounced],
  )

  return {
    input,
    value,
    onInputChange,
  }
}
