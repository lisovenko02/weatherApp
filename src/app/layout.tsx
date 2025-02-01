import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from './components/common/Header'
import { Toaster } from 'react-hot-toast'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'WeatherApp',
  description: 'Explore users and their weather preferences',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} bg-background text-foreground antialiased`}
      >
        <Toaster />
        <Header />

        <main className="max-w-screen-lg mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
