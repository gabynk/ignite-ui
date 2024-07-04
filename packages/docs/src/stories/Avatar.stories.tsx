import { Avatar, AvatarProps } from '@gnakassima-ignite-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gabynk.png',
    alt: 'Gabriele Nakassima',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const CustomTag: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
