import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
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
      <Head>
        <meta name="Personal Page" content="Portfolio Enzo Camera" />    
        <link rel="icon" href="/enzocamIcon.png" sizes="any" />
      </Head>
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

