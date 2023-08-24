'use client'
import React, { ReactNode, useState } from 'react'
import styles from './styles'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import Details from './Details'
import { useTodoItemBG } from '@/hooks/useTodoItemBG'

type TodoItemProps = {
  todo: Todo,
  children?: ReactNode,
}

const TodoItem = ({ todo, children }: TodoItemProps) => 
{
  const [ showDetails, setShowDetails ] = useState<boolean>(false)
  const gradientList = [
    'from-cyan-800 to-blue-600 hover:from-teal-600 hover:to-blue-400',
    'from-rose-800 to-pink-400',
    'from-red-600 to-amber-400',
    'from-emerald-900 to-teal-400',
  ]
  const gradient = gradientList[0]
  console.log(gradient)

  const DetailsDisplay = () => {
    return showDetails
      ? <Details todo={todo} />
      : null
  }
  
  return (
    <li className={`${styles.root} bg-gradient-to-r ${gradient} transition-all duration-500`} onClick={() => setShowDetails(!showDetails)}>
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