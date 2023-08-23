'use client'
import React, { ReactNode } from 'react'
import TodoItem from '../TodoItem'
import { Todo } from '@/types/Todo'

type Props = {
  todos: Todo[],
  buttons: ReactNode[],
}

const TodoList = ({ todos, buttons }: Props) => {
  
}

export default TodoList