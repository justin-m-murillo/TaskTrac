'use client'
import React, { useState } from 'react'

import { DisplayProps } from '@/types/DisplayProps'
import { Todo, TodosState } from '@/types/Todo'
import DeletedList from '../DeletedList'

const TodoDeletedDisplay = ({ data }: DisplayProps) => {
  const [ todos, setTodos ] = useState<Todo[]>(data)

  const todosState: TodosState = {
    todos: todos,
    setTodos: setTodos
  }

  return (
    <DeletedList todos={todos} todosState={todosState} />
  )
}

export default TodoDeletedDisplay