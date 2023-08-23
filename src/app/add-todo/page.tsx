'use client'
import React, { useState } from 'react'
import { useTodoListContext } from '@/context/TodoListContext'
import { useTodoNavContext } from '@/context/TodoNavContext'
import styles from './styles'

import { actionCreateTodo } from '@/actions/actionsTodo'


const PageAddTodo = () => {
  const { todos, setTodos } = useTodoListContext()
  const { setActiveTab } = useTodoNavContext()
  const [ textAreaValue, setTextAreaValue ] = useState<string>('')
  
  return (
    <form action={data => actionCreateTodo(data, setActiveTab, {todos, setTodos})} className={styles.root}>
      <label className={styles.label}>Title</label>
      <input type='text' name='title' className={styles.input} />
      <label className={styles.label}>Description</label>
      <textarea name='description' value={textAreaValue} onChange={e => setTextAreaValue(e.target.value)} className={styles.input} />
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