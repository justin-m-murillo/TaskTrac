'use client'
import React from 'react'
import TodoItem from '../TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonRecover from '../ButtonRecover'

import { motion, AnimatePresence } from 'framer-motion'
import { motionListVariants, motionListItemVariants } from '@/motion/variants'

const TodoListDeleted = ({ todos: deletedTodos, todosContext }: TodoListProps) => {
  return (
    <AnimatePresence>
      <ul>
        {deletedTodos.map(todo => (
          <li 
            key={todo.id}
            className='my-4'
          >
            <TodoItem todo={todo}>
              <ButtonRow>
                <ButtonRecover id={todo.id} todosContext={todosContext} />
              </ButtonRow>
            </TodoItem>
          </li>
        ))}
      </ul>
    </AnimatePresence>
  )
}

export default TodoListDeleted