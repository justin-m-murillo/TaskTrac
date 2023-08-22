'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'
import TodoItem from '@/components/TodoItem'
import useDateTime from '@/hooks/useDateTime'
import DisplayEmptyList from '@/components/DisplayEmptyList'

const CompletedTodos = () => {
  const { todos } = useTodoListContext()
  const completed = todos.filter(todo => todo.completed)
  const displayList = () => {
    return (
      <ul>
        {completed
          .map(todo => (
            <TodoItem 
              key={todo.id} 
              title={todo.title}
              description={todo.description}
              timePrefix='completed:'
              time={todo.completedAt ? useDateTime(todo.completedAt) : 'n/a'}
            />
          ))}
      </ul>
    )
  }

  return completed.length > 0 ? displayList() : <DisplayEmptyList listName='Completed to-dos' />
}

export default CompletedTodos