import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import SessionProviderContext from '@/context/SessionProviderContext'
import PrismaProvider from '@/components/PrismaProvider'
import TodoNav from '@/components/TodoNav'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaskTrac',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html className={`${styles.overflowY}`} lang="en">
      <body className={`
        ${montserrat.className} 
        ${styles.layout}
        ${styles.scrollbar}
        ${styles.pageContainer}
      `}>
          <SessionProviderContext>
            <TodoNav />
            <PrismaProvider>
              {children}
            </PrismaProvider>  
          </SessionProviderContext>
      </body>
    </html>
  )
}

const styles = {
  layout: 'w-auto h-screen bg-slate-950',
  pageContainer: 'relative container max-w-screen-sm mx-auto py-10',
  overflowY: 'overflow-y-scroll',
  scrollbar: 'scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-slate-700',
}