import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Text, Box } from '@gnakassima-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <Text>Hover me!</Text>,
    message: 'Hello!',
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => {
      return <Box css={{ width: '$20', margin: '$4' }}>{Story()} </Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
