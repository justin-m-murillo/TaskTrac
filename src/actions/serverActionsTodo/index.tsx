'use server'
import { prisma } from '@/app/db'

export const serverActivateTodo = async (
  id: string, ) =>
{
  return await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      completed: false,
      completedAt: null,
      deleted: false,
      deletedAt: null,
    }
  })
}

export const serverCompleteTodo = async (
  id: string,
  title: string, ) => 
{
  return await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      completed: true,
      completedAt: new Date()
    }
  })
}

export const serverCreateTodo = async (data: FormData) => {
  const title = data.get('title')?.valueOf()
  const description = data.get('description')?.valueOf()
  if (typeof title !== 'string') {
    throw new Error('Invalid Title')
  }
  if (typeof description !== 'string') {
    throw new Error('Invalid Description')
  }

  return await prisma.todo.create({ 
    data: {
      title,
      description,
      completed: false, 
      deleted: false 
  }})
}

export const serverDeleteTodo = async (
  id: string,) => 
{
  return await prisma.todo.update({ 
    where: {
      id: id,
    },
    data: {
      deleted: true,
      deletedAt: new Date()
    }
  })
  //console.log('Deleted', id, title)
}