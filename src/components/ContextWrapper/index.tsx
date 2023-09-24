'use client'
import React, { ReactNode, useState } from 'react'
import { TodoNavContext } from '@/context/TodoNavContext'
import { TodoListContext } from '@/context/TodoListContext'
import { Todo24HourContext } from '@/context/Todo24HourTime'
import { Todo } from '@/types/Todo'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  todoFetched?: Todo[]
  children: ReactNode
}



const ContextWrapper = ({ todoFetched=[], children }: Props) => {
  // const [ menuOpen, setMenuOpen ] = useState<boolean>(false)
  const [ todos, setTodos ] = useState<Todo[]>(todoFetched)
  const [ is24HourTime, setIs24HourTime ] = useState<boolean>(false)
  //const motionTabControlsProps = useMotionTabControls(menuOpen)

  return (
      <TodoListContext.Provider value={{ todos, setTodos }}>
        <Todo24HourContext.Provider value={{ is24HourTime, setIs24HourTime }}>
          { children }
        </Todo24HourContext.Provider>
      </TodoListContext.Provider>
  )
}

export default ContextWrapper