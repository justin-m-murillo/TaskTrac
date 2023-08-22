'use client'
import React, { useState } from 'react'
import styles from './styles'
import MenuTab from '../MenuTab'

import { MdHome, MdChecklist, MdDeleteOutline, MdAdd } from 'react-icons/md'

const TodoNav = () => {
  const [ openTab, setOpenTab ] = useState<string>('/')

  return (
    <div className={styles.root}>
      <MenuTab 
        title='Home' 
        Icon={MdHome} 
        href='/' 
        openTabState={{ openTab, setOpenTab }} 
        isLeft 
      />
      <MenuTab 
        title='Completed' 
        Icon={MdChecklist} 
        href='/completed-todos' 
        openTabState={{ openTab, setOpenTab }}
      />
      <MenuTab 
        title='Deleted'
        Icon={MdDeleteOutline} 
        href='/deleted-todos' 
        openTabState={{ openTab, setOpenTab }} 
      />
      <MenuTab 
        title='Add'
        Icon={MdAdd}
        href='/add-todo' 
        openTabState={{ openTab, setOpenTab }} 
        isRight 
      />
    </div>
  )
}

export default TodoNav