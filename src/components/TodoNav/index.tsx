'use client'
import React, { useState } from 'react'
import styles from './styles'
import MenuTab from '../MenuTab'

import { MdHome, MdChecklist, MdDeleteOutline, MdAdd } from 'react-icons/md'

const TodoNav = () => {

  return (
      <div className={styles.root}>
        <MenuTab 
          title='Home' 
          Icon={MdHome} 
          href='/home'
          isLeft 
        />
        <MenuTab 
          title='Completed' 
          Icon={MdChecklist} 
          href='/completed-todos'
        />
        <MenuTab 
          title='Deleted'
          Icon={MdDeleteOutline} 
          href='/deleted-todos'
        />
        <MenuTab 
          title='Add'
          Icon={MdAdd}
          href='/add-todo'
          isRight 
        />
    </div>
    
  )
}

export default TodoNav