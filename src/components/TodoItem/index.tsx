'use client'
import React, { ReactNode } from 'react'
import styles from './styles'

type TodoItemProps = {
  title: string,
  timeDisplay: string,
  buttons?: ReactNode[],
}

const TodoItem = ({ title, timeDisplay, buttons }: TodoItemProps) => {
  return (
    <li className={styles.listItemContainer}>
      <div>
        <p className={styles.listItemText}>
          {title}
        </p>
        <p className={styles.listItemTime}>
          {timeDisplay}
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