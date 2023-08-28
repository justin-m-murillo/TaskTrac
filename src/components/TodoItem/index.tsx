'use client'
import React, { ReactNode, useState } from 'react'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import Details from './Details'
import TodoItemContainer from './TodoItemContainer'

import { AnimatePresence } from 'framer-motion'

type TodoItemProps = {
  todo: Todo,
  children?: ReactNode,
}

const TodoItem = ({ todo, children }: TodoItemProps) => 
{
  const [ showDetails, setShowDetails ] = useState<boolean>(false)
  
  return (
    <TodoItemContainer
      gradient={todo.bgGradient}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
        <Headline title={ todo.title }>
          { children }
        </Headline>
        <AnimatePresence>
          {showDetails && <Details todo={todo} />}
        </AnimatePresence>
    </TodoItemContainer>
  )
}

export default TodoItem