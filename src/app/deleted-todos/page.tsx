'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'

import TodoItem from '@/components/TodoItem'
import Button from '@/components/Button'
import { actionActivateTodo } from '@/actions/actionsTodo'

import useDateTime from '@/hooks/useDateTime'
import { MdRestoreFromTrash } from 'react-icons/md'


const DeletedTodos = () => {
  const { todos, setTodos } = useTodoListContext()

  return (
    <ul>
      {todos
        .filter(todo => todo.deleted)
        .map(todo => (
          <TodoItem 
            key={todo.id} 
            title={todo.title}
            timeDisplay={
              `deleted on ${todo.deletedAt ? useDateTime(todo.deletedAt) : 'n/a'}`
            }
            buttons={[
              <Button 
                Icon={MdRestoreFromTrash} 
                hover='hover:text-blue-500' 
                onClick={() => actionActivateTodo(todo.id, { todos, setTodos })}
              />
            ]}
          />
      ))}
    </ul>
  )
}

export default DeletedTodos