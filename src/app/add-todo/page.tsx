'use client'
import React from 'react'
import styles from './styles'

import crudTodo from '@/actions/crudTodo'
import Link from 'next/link'

type Props = {}

const PageAddTodo = (props: Props) => {
  return (
    <form action={crudTodo.create} className={styles.root}>
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