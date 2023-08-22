'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'
import TodoItem from '@/components/TodoItem'
//import TodoCompletedDisplay from '@/components/TodoCompletedDisplay'

const CompletedTodos = async () => {
  const { todos } = useTodoListContext()
  
  return (
    <ul>
      {todos
        .filter(todo => todo.completed)
        .map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
    </ul>
  )
}

export default CompletedTodos