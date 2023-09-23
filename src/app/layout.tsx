import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Providers from '@/providers/Providers'
import AppClient from '@/components/AppClient'
import PrismaProvider from '@/components/PrismaProvider'

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
      `}>
          <Providers>
            <PrismaProvider>
              <AppClient>
                {children}
              </AppClient>
            </PrismaProvider>
          </Providers>
      </body>
    </html>
  )
}

const styles = {
  layout: 'w-auto h-screen bg-slate-950',
  overflowY: 'overflow-y-scroll',
  scrollbar: 'scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-slate-700',
}
