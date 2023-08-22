'use server'
import React, { ReactNode } from 'react'
import { prisma } from '@/app/db'
import ClientApp from '@/components/ClientApp'

type Props = {
  children: ReactNode
}

const AppServer = async ({ children }: Props) => {
  const data = await prisma.todo.findMany()
  return (
    <ClientApp data={data}>
      { children }
    </ClientApp>
  )
}

export default AppServer