'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

import TodoListActive from '@/components/TodoListActive'
import TodoListEmpty from '@/components/TodoListEmpty'
import { useTodoListContext } from '@/context/TodoListContext'
import { getTodos } from '@/actions/actionsTodo'
import { Todo } from '@/types/Todo'
import useFetchTodos from '@/hooks/useFetchTodos'

const Index = () => {
  const { data: session } = useSession()
  const [ todos ] = useFetchTodos();
  const active = todos.filter(todo => !todo.completed_at && !todo.deleted_at)
    
  return (
    <>
      {active.length > 0 
      ? <TodoListActive todos={active} /> 
      : <TodoListEmpty alertText='To-do list is empty!' showAdd />}
    </>
  )
}

export default Index