import { ReactNode } from 'react'

import { Button, DEFAULT_BUTTON_MOTION } from '~/components/ui'

export interface ButtonSelectOption<T extends string> {
  icon?: ReactNode
  value: T
  label: ReactNode
}

export interface ButtonSelectOptionProps<T extends string> {
  value?: T
  option: ButtonSelectOption<T>
  onSelect?: (value: T) => void
}

export const ButtonSelectOption = <T extends string>({ option, value, onSelect }: ButtonSelectOptionProps<T>) => {
  const { label, icon } = option

  const handleClick = () => {
    if (onSelect) {
      onSelect(option.value)
    }
  }

  const isSelected = value === option.value

  return (
    <Button
      // TODO: Fix styles for light theme
      className="flex-1 rounded-none border text-sm first:rounded-bl-md first:rounded-tl-md last:rounded-br-md last:rounded-tr-md"
      variant={isSelected ? 'primary' : 'text'}
      iconLeft={icon}
      onClick={handleClick}
      motion={{ ...DEFAULT_BUTTON_MOTION, whileTap: { scale: 1, zIndex: 10 } }}
    >
      {label}
    </Button>
  )
}
