'use server'
import React, { ReactNode } from 'react'
import { prisma } from '@/app/db'
import AppClient from '@/components/AppClient'

type Props = {
  children: ReactNode
}

const AppServer = async ({ children }: Props) => {
  const data = await prisma.todo.findMany()
  return (
    <AppClient data={data}>
      { children }
    </AppClient>
  )
}

export default AppServer