import AppServer from '@/components/AppServer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.layout}`}>
          <AppServer>
            {children}
          </AppServer>
      </body>
    </html>
  )
}

const styles = {
  layout: 'w-auto my-4',
}
