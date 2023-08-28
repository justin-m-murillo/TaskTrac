'use client'
import React, { ReactNode, useState } from 'react'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import Details from './Details'
import { useTodoItemBG } from '@/hooks/useTodoItemBG'
import TodoItemContainer from './TodoItemContainer'

type TodoItemProps = {
  todo: Todo,
  children?: ReactNode,
}

const TodoItem = ({ todo, children }: TodoItemProps) => 
{
  const [ showDetails, setShowDetails ] = useState<boolean>(false)

  const DetailsDisplay = () => {
    return showDetails
      ? <Details todo={todo} />
      : null
  }
  
  return (
    <TodoItemContainer
      gradient={todo.bgGradient}
      onClick={() => setShowDetails(!showDetails)}
    >
        <Headline title={ todo.title }>
          { children }
        </Headline>
        <DetailsDisplay />
    </TodoItemContainer>
  )
}

export default TodoItem