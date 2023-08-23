'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import Button from '../Button'
import { actionCompleteTodo, actionDeleteTodo } from '@/actions/actionsTodo'

import { MdCheckBox, MdDisabledByDefault } from 'react-icons/md'
import { useTodoListContext } from '@/context/TodoListContext'
import { Todo, TodosState } from '@/types/Todo'

type TodoListActiveProps = {
  activeTodos: Todo[],
  todosContext: TodosState
}

const TodoListActive = ({ activeTodos, todosContext}: TodoListActiveProps) => {
  return (
    <ul>
      {activeTodos
        .map(todo => (
          <TodoItem 
            key={todo.id} 
            {...todo}
            // timePrefix='created:'
            // time={useDateTime(todo.createdAt)}
            buttons={[
              <Button 
                Icon={MdCheckBox} 
                hover='hover:text-green-700' 
                onClick={() => actionCompleteTodo(
                  todo.id, 
                  todo.title, 
                  todosContext,
                )}
              />,
              <Button 
                Icon={MdDisabledByDefault}
                hover='hover:text-red-700'
                onClick={() => actionDeleteTodo(
                  todo.id,
                  todosContext
                )}
              />
            ]}
          />
        ))}
    </ul>
  )
}

export default TodoListActive