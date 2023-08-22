'use client'
import React, { ReactNode, useState } from 'react'
import { TodoListContext } from '@/context/TodoListContext'
import { Todo } from '@/types/Todo'
import { DateTime } from 'ts-luxon'

type Props = {
  data: Todo[],
  children: ReactNode
}

const App = ({ data, children }: Props) => {
  const [ todos, setTodos ] = useState<Todo[]>(data)

  return (
    <TodoListContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoListContext.Provider>
  )
}

export default App