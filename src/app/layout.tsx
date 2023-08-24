import AppServer from '@/components/AppServer'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

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
      <body className={`${montserrat.className} ${styles.layout}`}>
          <AppServer>
            {children}
          </AppServer>
      </body>
    </html>
  )
}

const styles = {
  layout: 'w-auto h-screen bg-gradient-to-tr from-blue-950 to-cyan-800',
}
