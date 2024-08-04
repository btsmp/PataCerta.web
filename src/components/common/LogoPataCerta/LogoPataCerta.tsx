'use client'
import { FaPaw } from 'react-icons/fa'

export type LogoPataCertaProps = {
  showIcon?: boolean
  showText?: boolean
  logo?: React.ReactNode
  title?: string
}

export function LogoPataCerta({
  showIcon = true,
  showText = true,
  logo = <FaPaw />,
  title = 'PataCerta',
}: LogoPataCertaProps) {
  return (
    <div className="flex gap-1 items-center">
      {showIcon && logo}
      {showText && <span className="text-lg font-bold">{title}</span>}
    </div>
  )
}
