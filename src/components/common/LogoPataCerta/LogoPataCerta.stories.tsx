import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { LogoPataCerta } from './LogoPataCerta' // Atualize o caminho se necessário
import { FaBeer, FaPaw } from 'react-icons/fa' // Importando um ícone para testes

const meta: Meta<typeof LogoPataCerta> = {
  title: 'Components/LogoPataCerta',
  component: LogoPataCerta,
  argTypes: {
    showIcon: { control: 'boolean' },
    showText: { control: 'boolean' },
    logo: { control: 'object' },
    title: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof LogoPataCerta>

export const Default: Story = {}
Default.args = {
  showIcon: true,
  showText: true,
  logo: <FaPaw />,
  title: 'PataCerta',
}

export const OnlyIcon: Story = {
  args: {
    showIcon: true,
    showText: false,
    logo: <FaPaw />,
  },
}

export const OnlyText: Story = {
  args: {
    showIcon: false,
    showText: true,
    logo: <FaBeer />,
    title: 'Costumizável',
  },
}

export const Custom: Story = {
  args: {
    logo: <FaBeer />,
    title: 'CevadaFree',
  },
}
