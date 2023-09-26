'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'
import TodoListEmpty from '@/components/TodoListEmpty'
import TodoListDeleted from '@/components/TodoListDeleted'


const DeletedTodosPage = () => {
  const { todos, setTodos } = useTodoListContext()
  const deleted = todos.filter(todo => todo.deleted_at)

  return deleted.length > 0
    ? <TodoListDeleted todos={deleted} todosContext={{ todos, setTodos }} />
    : <TodoListEmpty alertText='No deleted to-dos found!' />
  }

export default DeletedTodosPage