'use client'
import React, { ReactNode, useState } from 'react'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import Details from './Details'
import TodoItemContainer from './TodoItemContainer'
import ButtonRow from './ButtonRow'

import { AnimatePresence } from 'framer-motion'
import getDateTime from '@/utils/getDateTime'
import { useTodo24HourContext } from '@/context/Todo24HourTime'

type TodoItemProps = {
  todo: Todo
  buttons?: React.JSX.Element[]
}

const TodoItem = ({ todo, buttons }: TodoItemProps) => {
  const { is24HourTime } = useTodo24HourContext()
  const [ showDetails, setShowDetails ] = useState<boolean>(false)

  
  return (
    <TodoItemContainer
      todo={todo}
      gradient={todo.bgGradient}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className='grid grid-cols-7 px-2'>
        <h1 className='col-span-6 pt-2 text-white text-xl font-bold'>{todo.title}</h1>
        <div className='col-span-1 justify-end'>
          {showDetails && buttons &&
            <ButtonRow>
              {buttons.map((btn, index) => (
                <span key={index} className='pt-2'>{btn}</span>
              ))}
            </ButtonRow>
          }
        </div>
      </div>
      {showDetails && <Details todo={todo} />}
    </TodoItemContainer>
  )
}

export default TodoItem