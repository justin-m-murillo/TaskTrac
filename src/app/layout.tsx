import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import SessionProviderContext from '@/context/SessionProviderContext'
import TodoNav from '@/components/TodoNav'
import ContextWrapper from '@/components/ContextWrapper'

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
            <ContextWrapper>
              {children}
            </ContextWrapper>
          </SessionProviderContext>
      </body>
    </html>
  )
}

const styles = {
  layout:  'w-[95%] md:w-auto h-full bg-slate-950',
  pageContainer: 'relative container max-w-screen-sm mx-auto py-10 ',
  overflowY: 'overflow-y-scroll',
  scrollbar: 'scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-slate-700',
}