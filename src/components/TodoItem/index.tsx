'use client'
import React, { ReactNode, useState } from 'react'
import styles from './styles'
import { Todo } from '@/types/Todo'

import Headline from './Headline'
import DueDate from './DueDate'
import Location from './Location'
import ButtonRow from './ButtonRow'
import Details from './Details'
import DetailsBtn from './DetailsBtn'
import useDateTime from '@/hooks/useDateTime'

type TodoItemProps = {
  timePrefix: string,
  todo: Todo,
  buttons?: ReactNode[],
}

const TodoItem = ({ 
  todo,
  timePrefix,
  buttons }: TodoItemProps) => 
{
  const [ showDetails, setShowDetails ] = useState<boolean>(false)
  const {
    title,
    description,
    createdAt,

  } = todo
  
  const DetailsDisplay = () => {
    return showDetails
      ? <Details 
          description={ description }
          fields={[
            { 
              key: 'Due:', 
              value: useDateTime(createdAt) 
            },
            {
              key: 'Location:', 
              value: 'Fremont, CA'
            }
          ]}
        />
      : null
  }
  
  return (
    <li className={styles.root}>
      <Headline
        title={ title }
        ButtonRow={ <ButtonRow buttons={buttons} /> }
      />
      <DetailsDisplay />
      <DetailsBtn showDetails={showDetails} setShowDetails={setShowDetails} />
    </li>
  )
}

export default TodoItem