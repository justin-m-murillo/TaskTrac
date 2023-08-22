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
          {/* {description} */} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A lacus vestibulum sed arcu non odio euismod. Nisi lacus sed viverra tellus. Lectus quam id leo in. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ut pharetra sit amet aliquam id diam.
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