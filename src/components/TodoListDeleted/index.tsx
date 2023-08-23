'use client'
import React from 'react'
import TodoItem from '../TodoItem'
import { Todo, TodosState, TodoListProps } from '@/types/Todo'
import Button from '../Button'
import { MdRestoreFromTrash } from 'react-icons/md'
import { actionActivateTodo } from '@/actions/actionsTodo'

const TodoListDeleted = ({ todos: deletedTodos, todosContext }: TodoListProps) => {
  return (
    <ul>
      {deletedTodos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          buttons={[
            <Button 
              Icon={MdRestoreFromTrash} 
              hover='hover:text-blue-500'
              onClick={() => actionActivateTodo(todo.id, todosContext)}
            />
          ]}
        />
      ))}
    </ul>
  )
}

export default TodoListDeleted