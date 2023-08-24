'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
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
        .map((todo, index) => (
          <TodoItem 
            key={todo.id} 
            todo={todo}
            index={index}
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