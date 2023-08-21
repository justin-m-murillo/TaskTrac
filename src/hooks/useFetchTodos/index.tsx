'use server'
import { prisma } from '../../app/db'
import { Todo } from '@/types/Todo'

const useFetchTodos = async () => {
  const todos: Todo[] = await prisma.todo.findMany()
  return todos
}

export default useFetchTodos