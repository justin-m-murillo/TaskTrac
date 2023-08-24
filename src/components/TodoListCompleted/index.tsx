'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonDeleteForever from '../ButtonDeleteForver'

const TodoListCompleted = ({ todos: completed, todosContext }: TodoListProps) => {
  return (
    <ul>
      {completed
        .filter(todo => todo.completed)
        .map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
          >
            <ButtonRow>
              <ButtonDeleteForever id={todo.id} todosContext={todosContext} />
            </ButtonRow>
          </TodoItem>
        ))
      }
    </ul>
  )
}

export default TodoListCompleted