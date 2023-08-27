'use client'
import React from 'react'

import TodoItem from '../TodoItem'
import { Todo, TodosState } from '@/types/Todo'

import Button from '../Button'
import { MdCheckBox, MdDisabledByDefault } from 'react-icons/md'
import { compTodo, delTodo } from '@/actions/actionsTodo'

const TodoActiveDisplay = ({ todos, setTodos }: TodosState) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo}>
          <>
            <Button 
              Icon={MdCheckBox} 
              hover='hover:text-green-700' 
              onClick={() => compTodo(todo.id, todo.title, { todos, setTodos })}  
            />
            <Button 
              Icon={MdDisabledByDefault} 
              hover='hover:text-red-700'
              onClick={() => delTodo(todo.id, todo.title, { todos, setTodos })}
            />
          </>
        </TodoItem>
      ))}
    </ul>
  )
}

export default TodoActiveDisplay