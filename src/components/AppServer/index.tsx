import React, { ReactNode } from 'react'
import { prisma } from '@/app/db'
import App from '@/components/App'


type Props = {
  children: ReactNode
}

const AppServer = async ({ children }: Props) => {
  const data = await prisma.todo.findMany()
  return (
    <App data={data}>
      { children }
    </App>
  )
}

export default AppServer