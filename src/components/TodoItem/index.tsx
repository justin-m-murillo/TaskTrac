'use client'
import React, { ReactNode } from 'react'
import styles from './styles'

import useDateTime from '@/hooks/useDateTime'

type TodoItemProps = {
  title: string,
  createdAt: Date,
  children?: ReactNode,
}

const TodoItem = ({ title, createdAt, children }: TodoItemProps) => {
  const date = useDateTime(createdAt)

  return (
    <li className={styles.listItemContainer}>
      <div>
        <p className={styles.listItemText}>
          {title}
        </p>
        <p className={styles.listItemTime}>
          created on {date}
        </p>  
      </div>
      <div className={styles.buttonRow}>
        {children}
      </div>
    </li>
  )
}

export default TodoItem