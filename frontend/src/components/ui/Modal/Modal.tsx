import { ReactNode } from 'react'

import { Card } from '../Card'

export interface ModalProps {
  isOpen: boolean
  children: ReactNode
  maxWidth?: number
  onClose: () => void
}

export const Modal = ({ children, isOpen, onClose, maxWidth = 1280 }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-10 overflow-auto p-12">
      <div className="absolute inset-0 z-10 bg-black opacity-60" onClick={onClose} />

      <Card className={`absolute z-20 max-w-[${maxWidth}px] mx-auto`}>{children}</Card>
    </div>
  )
}
