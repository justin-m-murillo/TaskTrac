import TodoNav from '@/components/TodoNav'
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
        <div className={styles.root}>
          <TodoNav />
          <AppServer>
            {children}
          </AppServer>
        </div>
      </body>
    </html>
  )
}

const styles = {
  layout: 'w-screen flex flex-col w-screen items-center flex-col my-4',
  root: 'w-2/5'
}
