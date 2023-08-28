'use client'
import React, { ReactNode, useState } from 'react'
import { TodoNavContext } from '@/context/TodoNavContext'
import { TodoListContext } from '@/context/TodoListContext'
import { Todo24HourContext } from '@/context/Todo24HourTime'
import { Todo } from '@/types/Todo'
import { usePathname } from 'next/navigation'

import styles from './styles'

import TodoNav from '../TodoNav'

type Props = {
  data: Todo[],
  children: ReactNode
}

const AppClient = ({ data, children }: Props) => {
  const pathname = usePathname()
  const [ activeTab, setActiveTab ] = useState<string>(pathname)
  const [ todos, setTodos ] = useState<Todo[]>(data)
  const [ is24HourTime, setIs24HourTime ] = useState<boolean>(false)

  return (
    <TodoNavContext.Provider value={{ activeTab, setActiveTab }}>
      <TodoListContext.Provider value={{ todos, setTodos }}>
        <Todo24HourContext.Provider value={{ is24HourTime, setIs24HourTime }}>
          <div className={styles.root}>
            <TodoNav />
            { children }
          </div>
        </Todo24HourContext.Provider>
      </TodoListContext.Provider>
    </TodoNavContext.Provider>
  )
}

export default AppClient