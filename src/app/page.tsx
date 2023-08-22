'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'

import TodoItem from '@/components/TodoItem'
import { MdCheckBox, MdDisabledByDefault } from 'react-icons/md'
import Button from '@/components/Button'

import { actionCompleteTodo, actionDeleteTodo } from '@/actions/actionsTodo'

const PageHome = () => {
  const { todos, setTodos } = useTodoListContext()

  return (
    <ul>
      {todos
        .filter(todo => !todo.completed && !todo.deleted)
        .map(todo => (
          <TodoItem key={todo.id} {...todo}>
            <>
              <Button 
                Icon={MdCheckBox} 
                hover='hover:text-green-700' 
                onClick={() => actionCompleteTodo(
                  todo.id, 
                  todo.title, 
                  { todos, setTodos }
                )}
              />
              <Button 
                Icon={MdDisabledByDefault} 
                hover='hover:text-red-700'
                onClick={() => actionDeleteTodo(
                  todo.id,
                  { todos, setTodos }
                )}
              />
            </>
          </TodoItem>
      ))}
    </ul>
  )
}

export default PageHome