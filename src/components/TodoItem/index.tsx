'use client'
import React, { ReactNode, useState } from 'react'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import Details from './Details'
import TodoItemContainer from './TodoItemContainer'
import ButtonRow from './ButtonRow'

import { AnimatePresence } from 'framer-motion'

type TodoItemProps = {
  todo: Todo
  buttons?: React.JSX.Element[]
}

const TodoItem = ({ todo, buttons }: TodoItemProps) => 
{
  const [ showDetails, setShowDetails ] = useState<boolean>(false)
  
  return (
    <TodoItemContainer
      gradient={todo.bgGradient}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
        <Headline title={todo.title}>
          {showDetails && buttons && 
            <ButtonRow>
              { buttons }
            </ButtonRow>
          }
        </Headline>
        <AnimatePresence>
          {showDetails && <Details todo={todo} />}
        </AnimatePresence>
    </TodoItemContainer>
  )
}

export default TodoItem