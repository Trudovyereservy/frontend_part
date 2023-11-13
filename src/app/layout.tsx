import type { Metadata } from 'next';
// import { Roboto, Inter } from 'next/font/google';
import '../styles/globals.scss'

// const inter = Inter({ subsets: ['latin'] })

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
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
