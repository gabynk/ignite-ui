import { ComponentProps, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  children: ReactNode
  message: string
}

export function Tooltip({ children, message, ...props }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5} {...props}>
            {message}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
