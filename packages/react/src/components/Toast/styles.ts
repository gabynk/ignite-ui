import * as RadixToast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const slideIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(calc(100% + var(--viewport-padding)))',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const hide = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

export const ToastRoot = styled(RadixToast.Root, {
  display: 'grid',
  gridTemplateColumns: 'auto max-content',
  rowGap: '$2',
  background: '$gray800',
  width: 'calc($80 + $10)',
  padding: '$3 $5',
  borderRadius: '$sm',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in;`,
  },
})

export const ToastTitle = styled(RadixToast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastDescription = styled(RadixToast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
})

export const ToastClose = styled(RadixToast.Close, {
  background: 'transparent',
  border: 'none',
  color: '$gray200',
  borderRadius: '$1',
  cursor: 'pointer',

  svg: {
    width: '$5',
    height: '$5',
  },
})

export const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 32,
  right: 32,
  zIndex: 10,
})
