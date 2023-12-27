import type { Metadata } from 'next';
import { Roboto, Inter } from 'next/font/google';
import '../styles/globals.scss'

const inter = Inter({
  weight: '400',
  style: 'normal',
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Трудовые резервы',
  description: 'Общественно полезный фонд кадрового и спортивно-культурного развития “Трудовые резервы”',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
