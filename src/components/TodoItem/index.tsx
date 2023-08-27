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
  'from-red-800 to-fuchsia-400',
  'from-rose-800 to-orange-500',
  'from-fuchsia-900 to-amber-500',
  'from-violet-950 to-sky-500',
  'from-sky-800 to-rose-400',
  'from-blue-900 to-green-600',
  'from-emerald-900 to-purple-400',
  'from-amber-600 to-teal-400',
  'from-pink-600 to-indigo-400',
  'from-sky-800 to-rose-500',
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