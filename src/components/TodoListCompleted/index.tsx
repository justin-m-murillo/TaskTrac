'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonDeleteForever from '../ButtonDeleteForver'

const TodoListCompleted = ({ todos: completed, todosContext }: TodoListProps) => {
  return (
    <ul>
      {completed.map(todo => (
        <li
          key={todo.id}
          className='my-4'
        >
          <TodoItem todo={todo}>
            <ButtonRow>
              <ButtonDeleteForever id={todo.id} todosContext={todosContext} />
            </ButtonRow>
          </TodoItem>
        </li>
      ))}
    </ul>
  )
}

export default TodoListCompleted