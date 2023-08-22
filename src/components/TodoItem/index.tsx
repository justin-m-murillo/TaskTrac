'use client'
import React, { ReactNode } from 'react'
import styles from './styles'

type TodoItemProps = {
  title: string,
  description: string | null,
  timePrefix?: string,
  time?: string,
  buttons?: ReactNode[],
}

const TodoItem = ({ title, description, timePrefix, time, buttons }: TodoItemProps) => {
  return (
    <li className={styles.listItemContainer}>
      <div className={styles.listItemHead}>
        <p className={styles.listItemText}>
          {title}
        </p>
        <p className={styles.listItemDesc}>
          {description}
        </p>
        <p className={styles.listItemTime}>
          {timePrefix} <span className={styles.time}>{time}</span>
        </p>
      </div>
      <div className={styles.buttonRow}>
        {buttons?.map((Btn, index) => (
          <span key={index}>
            {Btn}
          </span>
        ))}
      </div>
    </li>
  )
}

export default TodoItem