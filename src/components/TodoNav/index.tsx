'use client'
import React from 'react'
import styles from './styles'
import MenuTab from '../MenuTab'

type Props = {}

const TodoNav = (props: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.menuContainer}>
        <MenuTab title='Home' href='/' />
        <MenuTab title='Completed' href='/completed-todos' />
        <MenuTab title='Deleted' href='/deleted-todos' />
        <MenuTab title='Add' href='/add-todo' />
      </div>
    </div>
  )
}

export default TodoNav