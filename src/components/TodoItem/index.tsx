'use client'
import React, { ReactNode, useState } from 'react'
import styles from './styles'
import { Todo } from '@/types/Todo'
import useDateTime from '@/hooks/useDateTime'

import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

type TodoItemProps = Todo & {
  buttons?: ReactNode[],
}

const TodoItem = ({ 
  title, 
  description,
  completed,
  completedAt,
  deleted,
  deletedAt,
  createdAt,
  buttons }: TodoItemProps) => 
{
  const [ showDetails, setShowDetails ] = useState<boolean>(false)
  
  return (
    <li className={styles.root}>
      <div className={styles.listItemMain}>
        <div className={styles.listItemHead}>
          <p className={styles.listItemTitle}>
            {title}
          </p>
          <p className={styles.listItemDesc}>
            {description}
          </p>
          {/* <p className={styles.listItemTime}>
            {timePrefix} <span className={styles.time}>{time}</span>
          </p> */}
        </div>
        <div className={styles.buttonRow}>
          {buttons?.map((Btn, index) => (
            <span key={index}>
              {Btn}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.showMoreButtonWrapper}>
        <button 
          className={styles.showMoreButton}
          onClick={() => setShowDetails(!showDetails)}
        >
          {!showDetails ? <MdArrowDropDown size={28} /> : <MdArrowDropUp size={28} />}
        </button>
      </div>
      {showDetails &&
        <div className={styles.detailsContainer}>
          <p>created: {useDateTime(createdAt)}</p>
          {completedAt && <p>completed: {useDateTime(completedAt)}</p>}
        </div>
      }
    </li>
  )
}

export default TodoItem