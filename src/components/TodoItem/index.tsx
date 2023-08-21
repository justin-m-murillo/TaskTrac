'use client'
import React, { ReactNode } from 'react'
import styles from './styles'
import { Todo, TodosState } from '../../types/Todo'
import Button from '../Button'

import deleteTodo from '@/actions/deleteTodo'
import useDateTime from '@/hooks/useDateTime'

type TodoItemProps = {
  todo: Todo,
  todosState: TodosState,
  children: ReactNode,
}

const TodoItem = ({ todo: { id, title, createdAt }, todosState, children }: TodoItemProps) => {
  const date = useDateTime(createdAt)

  const delTodo = () => {
    // set deleted Todo 'deleted' field to false
    deleteTodo(id, title)
    // remove deleted Todo from state
    const updatedTodos = todosState.todos.filter(todo => todo.id != id)
    // update state
    todosState.setTodos(updatedTodos)
  }

  return (
    <li className={styles.listItemContainer}>
      <div>
        <p className={styles.listItemText}>
          {title}
        </p>
        <p className={styles.listItemText}>
          {date}
        </p>  
      </div>
      <div className={styles.buttonRow}>
        {children}
      </div>    
    </li>
  )
}

export default TodoItem