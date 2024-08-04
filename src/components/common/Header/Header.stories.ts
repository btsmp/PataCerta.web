import { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    title: 'PataCerta',
    links: [
      { text: 'Início', href: '#inicio' },
      { text: 'Como funciona?', href: '#como-funciona' },
      { text: 'Sobre nós', href: '#sobre-nos' },
    ],
    buttons: [
      {
        text: 'Acessar',
        onClick: () => console.log('Acessar clicado'),
        variant: 'primary',
      },
      {
        text: 'Cadastrar',
        onClick: () => console.log('Cadastrar clicado'),
        variant: 'neutral',
      },
    ],
  },
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const CustomHeader: Story = {
  args: {
    title: 'My Custom Header',
    links: [
      { text: 'Home', href: '#home' },
      { text: 'Features', href: '#features' },
      { text: 'Contact', href: '#contact' },
    ],
    buttons: [
      {
        text: 'Sign In',
        onClick: () => console.log('Sign In clicked'),
        variant: 'primary',
      },
      {
        text: 'Register',
        onClick: () => console.log('Register clicked'),
        variant: 'neutral',
      },
    ],
  },
}

export const NoButtons: Story = {
  args: {
    links: [
      { text: 'Home', href: '#home' },
      { text: 'About', href: '#about' },
    ],
    buttons: [],
  },
}
