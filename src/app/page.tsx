'use client'
import React from 'react'
import { useTodoListContext } from '@/context/TodoListContext'

import TodoItem from '@/components/TodoItem'
import { MdCheckBox, MdDisabledByDefault } from 'react-icons/md'
import Button from '@/components/Button'
import DisplayEmptyList from '@/components/DisplayEmptyList'

import useDateTime from '@/hooks/useDateTime'
import { actionCompleteTodo, actionDeleteTodo } from '@/actions/actionsTodo'

const PageHome = () => {
  const { todos, setTodos } = useTodoListContext()
  const active = todos.filter(todo => !todo.completed && !todo.deleted)

  const displayList = () => {
    return (
      <ul>
        {active
          .map(todo => (
            <TodoItem 
              key={todo.id} 
              title={todo.title}
              description={todo.description}
              // timePrefix='created:'
              // time={useDateTime(todo.createdAt)}
              buttons={[
                <Button 
                  Icon={MdCheckBox} 
                  hover='hover:text-green-700' 
                  onClick={() => actionCompleteTodo(
                    todo.id, 
                    todo.title, 
                    { todos, setTodos }
                  )}
                />,
                <Button 
                  Icon={MdDisabledByDefault} 
                  hover='hover:text-red-700'
                  onClick={() => actionDeleteTodo(
                    todo.id,
                    { todos, setTodos }
                  )}
                />
              ]}
            />
        ))}
      </ul>
    )
  }

  return active.length > 0 ? displayList() : <DisplayEmptyList listName='To-do list' showAdd />
}

export default PageHome

const styles = {
  displayEmptyRoot: 'bg-gray-200 py-10 flex flex-col justify-center items-center'
}