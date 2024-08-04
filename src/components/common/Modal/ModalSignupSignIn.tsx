'use client'

import React from 'react'
import { LogoPataCerta } from '../LogoPataCerta/LogoPataCerta'
import { FormSignIn } from '@/components/Forms/FormSignIn/FormSignIn'
import { FormSignUp } from '@/components/Forms/FormSignUp/FormSignUp'

type ModalSignupSignInProps = {
  signIn?: boolean
  signUp?: boolean
  dialogRef: React.RefObject<HTMLDialogElement>
}

export function ModalSignupSignIn({
  signIn,
  signUp,
  dialogRef,
}: ModalSignupSignInProps) {
  function closeModal() {
    dialogRef.current?.close()
  }
  return (
    <dialog id="modal" className="modal" ref={dialogRef}>
      <div className="modal-box flex items-center justify-center flex-col">
        <button
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <LogoPataCerta />
        {signIn && <FormSignIn />}
        {signUp && <FormSignUp />}
      </div>
    </dialog>
  )
}
