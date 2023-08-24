'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import Button from '../Button'
import { actionCompleteTodo, actionDeleteTodo } from '@/actions/actionsTodo'

import { MdCheckBox, MdDisabledByDefault } from 'react-icons/md'
import { useTodoListContext } from '@/context/TodoListContext'
import { Todo, TodosState } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonComplete from '../ButtonComplete'
import ButtonDelete from '../ButtonDelete'

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
            todo={todo}
          >
            <ButtonRow>
              <ButtonComplete id={todo.id} title={todo.title} todosContext={todosContext} />
              <ButtonDelete id={todo.id} todosContext={todosContext} />
            </ButtonRow>
          </TodoItem>
        ))}
    </ul>
  )
}

export default TodoListActive