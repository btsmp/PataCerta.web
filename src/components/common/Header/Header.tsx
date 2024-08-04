'use client'

import { LogoPataCerta } from '../LogoPataCerta/LogoPataCerta'
import { FaPaw } from 'react-icons/fa'

type Link = {
  text: string
  href: string
}

type Button = {
  text: string
  onClick: () => void
  variant: 'primary' | 'neutral'
}

type HeaderProps = {
  logo?: React.ReactNode
  title?: string
  links: Link[]
  buttons: Button[]
}

export function Header({
  logo = <FaPaw />,
  title = 'PataCerta',
  links,
  buttons,
}: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-10 py-4 bg-white shadow-sm">
      <LogoPataCerta logo={logo} title={title} />
      <nav className="flex gap-3 mt-2 md:mt-0">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="link link-hover">
            {link.text}
          </a>
        ))}
      </nav>
      <div className="space-x-2 mt-2 md:mt-0">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`btn btn-sm ${
              button.variant === 'primary' ? 'btn-primary' : 'btn-neutral'
            }`}
            onClick={button.onClick}
            aria-label={button.text}
          >
            {button.text}
          </button>
        ))}
      </div>
    </header>
  )
}
