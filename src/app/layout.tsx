import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enzo Cámera',
  description: 'Personal page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/enzocamIcon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header/>
        <main className="min-h-screen mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

