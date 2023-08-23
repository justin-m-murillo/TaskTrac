'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'
import TodoListActive from '@/components/TodoListActive'
import TodoListEmpty from '@/components/TodoListEmpty'

const HomePage = () => {
  const { todos, setTodos } = useTodoListContext()
  const active = todos.filter(todo => !todo.completed && !todo.deleted)

  return active.length > 0 
    ? <TodoListActive activeTodos={active} todosContext={{ todos, setTodos }} /> 
    : <TodoListEmpty listName='To-do list' showAdd />
}

export default HomePage