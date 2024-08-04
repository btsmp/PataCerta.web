import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PataCerta',
  description:
    'PataCerta é a plataforma ideal para encontrar seu novo amigo de quatro patas! Explore nossos anúncios de adoção, conheça pets adoráveis e faça a diferença na vida deles. Junte-se a nós na missão de conectar pessoas e animais em uma nova jornada de amor e companhia.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
