import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Text } from '@gnakassima-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    children: <Text>Toast</Text>,
    title: 'Lorem, ipsum dolor sit amet',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    open: true,
  },
  argTypes: {
    children: {
      control: false,
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
