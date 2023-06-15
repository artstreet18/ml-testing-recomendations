import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Рекомендации по тестированию ML систем',
  description:
    'Рекомендации по тестированию ML систем на основе информации о проекте от пользователя',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}