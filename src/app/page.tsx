'use client'
import { Header } from '@/components/common/Header/Header'
export default function Home() {
  const links = [
    { text: 'Início', href: '#inicio' },
    { text: 'Como funciona?', href: '#como-funciona' },
    { text: 'Sobre nós', href: '#sobre-nos' },
  ]

  const buttons: HeaderButton[] = [
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
  ]

  return (
    <main>
      <Header buttons={buttons} links={links} />
    </main>
  )
}
