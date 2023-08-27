import React, { ReactNode, useState } from 'react'
import TodoItem from '../TodoItem'

import { Todo, TodosState } from '@/types/Todo'
import { DisplayProps } from '@/types/DisplayProps'

type TodoDisplayProps = DisplayProps & {
  children: ReactNode,
}

const TodoDisplay = ({ data, children }: TodoDisplayProps) => {
  const [ todos, setTodos ] = useState<Todo[]>(data)

  const todosState: TodosState = {
    todos: todos,
    setTodos: setTodos
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo}>
          <>
            {children}
          </>
        </TodoItem>
      ))}
    </ul>
  )
}

export default TodoDisplay