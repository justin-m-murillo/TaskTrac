import React from 'react'
import { Todo } from "../Todo"

export type DisplayProps = {
  todos: Todo[],
  setTodos: React.SetStateAction<Todo[]>
}