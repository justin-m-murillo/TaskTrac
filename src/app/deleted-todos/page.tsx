import React from 'react'
import { prisma } from '../db'
import TodoDeletedDisplay from '@/components/TodoDeletedDisplay'


const DeletedTodos = async () => {
  const deleted = await prisma.todo.findMany({
    where: {
      deleted: true,
  }})
  
  return (
    <TodoDeletedDisplay data={deleted} />
  )
}

export default DeletedTodos