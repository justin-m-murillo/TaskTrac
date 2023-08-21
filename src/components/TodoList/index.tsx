import React from 'react'

import TodoItem from '../TodoItem'
import { Todo, TodosState } from '../../types/Todo'

import Button from '../Button'
import { MdCheckBox, MdDisabledByDefault } from 'react-icons/md'

import crudTodo from '@/actions/crudTodo'

type Props = {
  todos: Todo[],
  todosState: TodosState,
}

const TodoList = ({ todos, todosState }: Props) => {
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} todosState={todosState}>
          <>
            <Button Icon={MdCheckBox} hover='hover:text-green-700' />
            <Button 
              Icon={MdDisabledByDefault} 
              hover='hover:text-red-700'
              onClick={() => crudTodo.delete(todo.id, todo.title, todosState)}
            />
          </>
        </TodoItem>
      ))}
    </ul>
  )
}

export default TodoList