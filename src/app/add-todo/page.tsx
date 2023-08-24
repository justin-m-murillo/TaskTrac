'use client'
import React, { useState } from 'react'
import Calendar from '@/components/Calendar'

import { useTodoListContext } from '@/context/TodoListContext'
import { useTodoNavContext } from '@/context/TodoNavContext'
import styles from './styles'

import { actionCreateTodo } from '@/actions/actionsTodo'
import useDateTime from '@/hooks/useDateTime'


const PageAddTodo = () => {
  const [ dueDate, setDueDate ] = useState<Date>(new Date())
  const { todos, setTodos } = useTodoListContext()
  const { setActiveTab } = useTodoNavContext()
  
  return (
    <form 
      action={data => 
        actionCreateTodo(data, dueDate, setActiveTab, {todos, setTodos})
      } 
      className={styles.root}
    >
      {/* Title */}
      <label className={styles.label}>Title</label>
      <input type='text' name='title' className={`${styles.singleInput} ${styles.input}`} />

      {/* Location */}
      <label className={styles.label}>Location</label>
      <input type='text' name='location' className={`${styles.singleInput} ${styles.input}`} />
      
      {/* Description */}
      <label className={styles.label}>Description</label>
      <textarea name='description' className={`${styles.areaInput} ${styles.input}`} />

      {/* Calendar */}
      <Calendar value={dueDate} onChange={setDueDate} />

      <div className='flex gap-1 justify-end'>
        <button
          className={styles.button}
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default PageAddTodo