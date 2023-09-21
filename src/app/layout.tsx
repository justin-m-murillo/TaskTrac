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
  const overflowY = 'overflow-y-scroll'
  const scrollbar = 'scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-slate-700'
  return (
    <html className={`${overflowY}`} lang="en">
      <body className={`
        ${montserrat.className} 
        ${styles.layout}
        ${scrollbar}
      `}>
          <AppServer>
            {children}
          </AppServer>
      </body>
    </html>
  )
}

const styles = {
  layout: 'w-auto h-screen bg-slate-950',
}
