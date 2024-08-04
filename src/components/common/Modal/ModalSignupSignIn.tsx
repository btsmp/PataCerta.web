'use client'

import React, { useRef, ReactNode } from 'react'

type ModalSignupSignInProps = {
  children: ReactNode
}

export function ModalSignupSignIn({ children }: ModalSignupSignInProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  function openModal() {
    dialogRef.current?.showModal()
  }
  function closeModal() {
    dialogRef.current?.close()
  }
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          openModal()
        }}
      >
        open modal
      </button>
      <dialog id="modal" className="modal" ref={dialogRef}>
        <div className="modal-box">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          {children}
        </div>
      </dialog>
    </>
  )
}
