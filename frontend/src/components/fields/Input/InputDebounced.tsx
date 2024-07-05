import { useEffect } from 'react'

import { useDebouncedValue } from '~/hooks'

import { Input, InputProps } from './Input'

export interface InputDebouncedProps extends InputProps {
  /**
   * @default 500
   */
  debounceMs?: number

  /**
   * Input onChange callback with value passed directly
   */
  onValueChange?: (value?: string) => void
}

export const InputDebounced = ({ debounceMs = 500, onChange, onValueChange, ...props }: InputDebouncedProps) => {
  const debounced = useDebouncedValue({ debounceMs })

  useEffect(() => {
    if (onValueChange) {
      onValueChange(debounced.value)
    }
  }, [onValueChange, debounced.value])

  return <Input {...props} value={debounced.input} onChange={debounced.onInputChange} />
}
