'use client'
import React from 'react'
import TodoItem from '../TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonRecover from '../ButtonRecover'

const TodoListDeleted = ({ todos: deletedTodos, todosContext }: TodoListProps) => {
  return (
    <ul>
      {deletedTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        >
          <ButtonRow>
            <ButtonRecover id={todo.id} todosContext={todosContext} />
          </ButtonRow>
        </TodoItem>
      ))}
    </ul>
  )
}

export default TodoListDeleted