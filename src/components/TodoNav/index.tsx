'use client'
import React from 'react'
import styles from './styles'
import TodoNavTab from '../TodoNavTab'

import { MdHome, MdChecklist, MdDeleteOutline, MdAdd } from 'react-icons/md'

const TodoNav = () => {

  return (
      <div className={styles.root}>
        <TodoNavTab 
          title='Home' 
          Icon={MdHome} 
          href='/home'
          isLeft 
        />
        <TodoNavTab 
          title='Completed' 
          Icon={MdChecklist} 
          href='/completed-todos'
        />
        <TodoNavTab 
          title='Deleted'
          Icon={MdDeleteOutline} 
          href='/deleted-todos'
        />
        <TodoNavTab 
          title='Add'
          Icon={MdAdd}
          href='/add-todo'
          isRight 
        />
    </div>
    
  )
}

export default TodoNav