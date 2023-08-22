'use client'
import React, { ReactNode, useState } from 'react'
import { TodoListContext } from '@/context/TodoListContext'
import { Todo } from '@/types/Todo'
import styles from './styles'

type Props = {
  data: Todo[],
  children: ReactNode
}

const ClientApp = ({ data, children }: Props) => {
  const [ todos, setTodos ] = useState<Todo[]>(data)

  return (
    <TodoListContext.Provider value={{ todos, setTodos }}>
      <div className={styles.root}>
        {children}
      </div>
    </TodoListContext.Provider>
  )
}

export default ClientApp