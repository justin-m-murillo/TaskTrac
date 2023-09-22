import React, { ReactNode } from 'react'
import AppClient from '@/components/AppClient'
import { Todo } from '@/types/Todo'

type Props = {
  children: ReactNode
}

const AppServer = async ({ children }: Props) => {
  //const data = await prisma.todo.findMany()
  const data:Todo[] = []
  return (
    <AppClient data={data}>
      { children }
    </AppClient>
  )
}

export default AppServer