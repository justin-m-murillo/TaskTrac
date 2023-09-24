'use client'
import React from 'react'
import TodoListEmpty from '@/components/TodoListEmpty'
import TodoListCompleted from '@/components/TodoListCompleted'
import { useTodoListContext } from '@/context/TodoListContext'

const CompletedTodosPage = () => {
  const { todos, setTodos } = useTodoListContext()
  const completed = todos.filter(todo => !!todo.completedAt)

  return completed.length > 0 
    ? <TodoListCompleted todos={completed} todosContext={{ todos, setTodos }} /> 
    : <TodoListEmpty alertText='No completed to-dos found!' />
}

export default CompletedTodosPage