'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'
import TodoItem from '@/components/TodoItem'
import useDateTime from '@/hooks/useDateTime'

const CompletedTodos = () => {
  const { todos } = useTodoListContext()
  
  return (
    <ul>
      {todos
        .filter(todo => todo.completed)
        .map(todo => (
          <TodoItem 
            key={todo.id} 
            title={todo.title} 
            timeDisplay={`completed on ${todo.completedAt ? useDateTime(todo.completedAt) : 'n/a'}`}
          />
        ))}
    </ul>
  )
}

export default CompletedTodos