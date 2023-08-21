import React from 'react'
import { prisma } from './db'

import TodoActiveDisplay from '@/components/TodoActiveDisplay/indes'

const PageHome = async () => {
  const todos = await prisma.todo.findMany({
    where: {
      completed: false,
      deleted: false,
  }})

  return (
    <TodoActiveDisplay data={todos} />
  )
}

export default PageHome