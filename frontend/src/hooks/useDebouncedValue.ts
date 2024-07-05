import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

interface Props {
  debounceMs?: number
}

export const useDebouncedValue = (props: Props = { debounceMs: 500 }) => {
  const [value, setValue] = useState('')
  const [input, setInput] = useState('')

  const setValueDebounced = useMemo(
    () => debounce((value: string) => setValue(value), props.debounceMs),
    [props.debounceMs],
  )

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const valueNew = event.target.value
      setInput(valueNew)
      setValueDebounced(valueNew)
    },
    [setValueDebounced],
  )

  return useMemo(
    () => ({
      input,
      value,
      onInputChange,
    }),
    [input, value, onInputChange],
  )
}
