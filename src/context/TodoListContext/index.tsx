'use client'
import { createContext, useContext } from 'react'
import { TodosState } from '@/types/Todo'
import { DateTime } from 'ts-luxon'

export const TodoListContext = createContext<TodosState>({
  todos: [],
  setTodos: () => {},
})

export const useTodoListContext = () => useContext(TodoListContext)