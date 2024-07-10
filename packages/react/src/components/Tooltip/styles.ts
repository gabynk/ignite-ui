import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideDownAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideRightAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const slideUpAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideLeftAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  width: 'max-content',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',

  '&[data-state="delayed-open"][data-side="top"]': {
    animationName: slideDownAndFade,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animationName: slideLeftAndFade,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animationName: slideUpAndFade,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animationName: slideRightAndFade,
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
