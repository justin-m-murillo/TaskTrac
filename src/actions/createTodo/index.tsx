'use server'
import { prisma } from "@/app/db"
import { redirect } from "next/navigation"

const createTodo = async (data: FormData) => {
  const title = data.get('title')?.valueOf()
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid Title')
  }

  await prisma.todo.create({ 
    data: { 
      title, 
      completed: false, 
      deleted: false 
  }})
  redirect('/')
}

export default createTodo