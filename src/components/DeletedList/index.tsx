import React from 'react'
import TodoItem from '../TodoItem'
import { Todo, TodosState } from '../../types/Todo'

import Button from '../Button'
import { MdRestoreFromTrash } from 'react-icons/md'

type Props = {
  todos: Todo[],
  todosState: TodosState,
}

const DeletedList = ({ todos, todosState }: Props) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} todosState={todosState}>
        <>
          <Button Icon={MdRestoreFromTrash} hover='hover:text-green-700' />
        </>
      </TodoItem>
      ))}
    </ul>
  )
}

export default DeletedList