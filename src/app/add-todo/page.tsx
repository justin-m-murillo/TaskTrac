'use client'
import React, { useRef } from 'react'
import { useTodoListContext } from '@/context/TodoListContext'
import styles from './styles'

import { actionCreateTodo } from '@/actions/actionsTodo'
import Link from 'next/link'

const PageAddTodo = () => {
  const { todos, setTodos } = useTodoListContext()
  
  return (
    <form action={data => actionCreateTodo(data, {todos, setTodos})} className={styles.root}>
      <label>Title</label>
      <input type='text' name='title' className={styles.input} />
      <div className='flex gap-1 justify-end'>
        <Link href='/'>
          Cancel
        </Link>
        <button
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default PageAddTodo