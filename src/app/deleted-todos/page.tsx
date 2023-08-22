'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'

import TodoItem from '@/components/TodoItem'
import Button from '@/components/Button'
import { actionActivateTodo } from '@/actions/actionsTodo'
import DisplayEmptyList from '@/components/DisplayEmptyList'

import { MdRestoreFromTrash } from 'react-icons/md'


const DeletedTodos = () => {
  const { todos, setTodos } = useTodoListContext()
  const deleted = todos.filter(todo => todo.deleted)

  const displayList = () => {
    return (
      <ul>
        {deleted
          .map(todo => (
            <TodoItem 
              key={todo.id} 
              title={todo.title}
              description={todo.description}
              // timePrefix='deleted:'
              // time={todo.deletedAt ? useDateTime(todo.deletedAt) : 'n/a'}
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

  return deleted.length > 0 ? displayList() : <DisplayEmptyList listName='Deleted to-dos' />
}

export default DeletedTodos