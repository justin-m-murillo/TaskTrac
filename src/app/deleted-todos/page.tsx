'use client'
import React, { useState, useEffect } from 'react'
import { Todo } from '@/types/Todo'
import { useTodoListContext } from '@/context/TodoListContext'

import TodoItem from '@/components/TodoItem'
import Button from '@/components/Button'
import { actionActivateTodo } from '@/actions/actionsTodo'

import { MdRestoreFromTrash } from 'react-icons/md'
//import TodoDeletedDisplay from '@/components/TodoDeletedDisplay'


const DeletedTodos = () => {
  const { todos, setTodos } = useTodoListContext()

  return (
    <ul>
      {todos
        .filter(todo => todo.deleted)
        .map(todo => (
          <TodoItem key={todo.id} {...todo}>
            <Button 
              Icon={MdRestoreFromTrash} 
              hover='hover:text-blue-500' 
              onClick={() => actionActivateTodo(todo.id, { todos, setTodos })}
            />
          </TodoItem>
      ))}
    </ul>
  )
}

export default DeletedTodos