'use client'
import { Header } from '@/components/common/Header/Header'
import { ModalSignupSignIn } from '@/components/common/Modal/ModalSignupSignIn'
import { useRef } from 'react'
export default function Home() {
  function openModal(type: 'signIn' | 'signUp') {
    if (type === 'signUp') dialogSignUpRef.current?.showModal()
    if (type === 'signIn') dialogSignUpRef.current?.showModal()
  }

  const links = [
    { text: 'Início', href: '#inicio' },
    { text: 'Como funciona?', href: '#como-funciona' },
    { text: 'Sobre nós', href: '#sobre-nos' },
  ]

  const buttons: HeaderButton[] = [
    {
      text: 'Acessar',
      onClick: () => openModal('signIn'),
      variant: 'primary',
    },
    {
      text: 'Cadastrar',
      onClick: () => openModal('signUp'),
      variant: 'neutral',
    },
  ]

  const dialogSignInRef = useRef<HTMLDialogElement>(null)
  const dialogSignUpRef = useRef<HTMLDialogElement>(null)

  return (
    <main>
      <Header buttons={buttons} links={links} />
      <ModalSignupSignIn signIn dialogRef={dialogSignInRef} />
      <ModalSignupSignIn signUp dialogRef={dialogSignUpRef} />
    </main>
  )
}
