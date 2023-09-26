'use client'
import React from 'react'

import TodoListActive from '@/components/TodoListActive'
import TodoListEmpty from '@/components/TodoListEmpty'
import { useTodoListContext } from '@/context/TodoListContext'

const Index = () => {
  const { todos, setTodos } = useTodoListContext()
  const active = todos.filter(todo => !todo.completed_at && !todo.deleted_at)

  return (
    <>
      {active.length > 0 
      ? <TodoListActive todos={active} todosContext={{todos, setTodos}}  /> 
      : <TodoListEmpty alertText='To-do list is empty!' showAdd />}
    </>
  )
}

export default Index