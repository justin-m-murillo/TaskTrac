'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { TodoListContext } from '@/context/TodoListContext'
import { Todo24HourContext } from '@/context/Todo24HourTime'
import { Todo } from '@/types/Todo'
import useFetchTodos from '@/hooks/useFetchTodos'
import TodoLoading from '../TodoLoading'
import { useSession } from 'next-auth/react'

type Props = {
  children: ReactNode;
}

const ContextWrapper = ({ children }: Props) => {
  const { data: session } = useSession();
  const { todos: todosFetched, isLoading } = useFetchTodos(session?.user.email);
  const [ todos, setTodos ] = useState<Todo[]>(todosFetched);
  const [ is24HourTime, setIs24HourTime ] = useState<boolean>(false)

  useEffect(() => {
    setTodos(todosFetched);
  }, [todosFetched]);

  return (
      <TodoListContext.Provider value={{ todos, setTodos }}>
        <Todo24HourContext.Provider value={{ is24HourTime, setIs24HourTime }}>
          { isLoading ? <TodoLoading /> : children }
        </Todo24HourContext.Provider>
      </TodoListContext.Provider>
  )
}

export default ContextWrapper