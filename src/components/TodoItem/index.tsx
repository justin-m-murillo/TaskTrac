'use client'
import React, { ReactNode, useState } from 'react'
import styles from './styles'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import Details from './Details'
import { useTodoItemBG } from '@/hooks/useTodoItemBG'

type TodoItemProps = {
  todo: Todo,
  index: number,
  children?: ReactNode,
}

const gradientHover = 'bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] transition-all duration-500'
const gradientList = [
  'from-red-600 to-fuchsia-800',
  'from-rose-800 to-pink-500',
  'from-fuchsia-900 to-violet-600',
  'from-violet-950 to-blue-400',
  'from-blue-800 to-cyan-400',
  'from-sky-900 to-teal-400',
  'from-green-900 to-teal-600',
  'from-red-600 to-amber-600',
  'from-red-600 to-violet-700',
  'from-sky-800 to-pink-500',
]

const TodoItem = ({ todo, index, children }: TodoItemProps) => 
{
  const [ showDetails, setShowDetails ] = useState<boolean>(false)
  
  const gradient = gradientList[index]
  console.log(gradient)

  const DetailsDisplay = () => {
    return showDetails
      ? <Details todo={todo} />
      : null
  }
  
  return (
    <li className={`${styles.root} bg-gradient-to-r ${gradient} ${gradientHover}`} onClick={() => setShowDetails(!showDetails)}>
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