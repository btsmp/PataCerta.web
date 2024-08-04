// src/components/Modal.stories.tsx

import { Meta, StoryObj } from '@storybook/react'
import { ModalSignupSignIn } from './ModalSignupSignIn'

const meta: Meta<typeof ModalSignupSignIn> = {
  title: 'Components/Modal/ModalSignupSignIn',
  component: ModalSignupSignIn,
}

export default meta

type Story = StoryObj<typeof ModalSignupSignIn>

// Default story
export const Default: Story = {}
