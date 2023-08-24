'use client'
import React, { ReactNode, useState } from 'react'
import styles from './styles'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import ButtonRow from './ButtonRow'
import Details from './Details'
import DetailsBtn from './DetailsBtn'

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
    <li className={styles.root} onClick={() => setShowDetails(!showDetails)}>
      <div className='px-4 py-2'>
        <Headline title={ todo.title }>
          { children }
        </Headline>
        <DetailsDisplay />
      </div>
    </li>
  )
}

export default TodoItem