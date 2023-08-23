'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'

const TodoListCompleted = ({ todos: completed }: TodoListProps) => {
  return (
    <ul>
      {completed
        .filter(todo => todo.completed)
        .map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            timePrefix='Completed:'
          />
        ))
      }
    </ul>
  )
}

export default TodoListCompleted