import { ComponentProps, ReactNode } from 'react'
import * as RadixToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  children: ReactNode
  title: string
  description: string
}

export function Toast({ children, title, description, ...props }: ToastProps) {
  return (
    <RadixToast.Provider swipeDirection="right">
      {children}
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        <ToastClose>
          <X weight="bold" />
        </ToastClose>
        <ToastDescription>{description}</ToastDescription>
      </ToastRoot>
      <ToastViewport />
    </RadixToast.Provider>
  )
}

Toast.displayName = 'Toast'
