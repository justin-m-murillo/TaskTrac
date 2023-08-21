'use server'
import React from 'react'
import { prisma } from '@/app/db'
import { Todo } from '../../types/Todo'

const deleteTodo = async (
  id: string,
  title: string,) => 
{
  await prisma.todo.update({ 
    where: {
      id: id,
    },
    data: {
      deleted: true,
      deletedAt: new Date()
    }
  })
  console.log('Deleted', id, title)
}

export default deleteTodo