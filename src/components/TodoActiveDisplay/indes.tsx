'use client'
import React, { useState } from 'react'

import TodoList from '../TodoList'
import { Todo, TodosState } from '@/types/Todo'
import { DisplayProps } from '@/types/DisplayProps'

const TodoActiveDisplay = ({ data }: DisplayProps) => {
  const [ todos, setTodos ] = useState<Todo[]>(data)

  const todosState: TodosState = {
    todos: todos,
    setTodos: setTodos
  }

  return (
    <TodoList todos={todos} todosState={todosState} />
  )
}

export default TodoActiveDisplay