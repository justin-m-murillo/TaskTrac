'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { Todo, TodosState } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonComplete from '../ButtonComplete'
import ButtonDelete from '../ButtonDelete'

import { motion } from 'framer-motion'
import { motionListVariants, motionListItemVariants } from '@/motion/variants'

type TodoListActiveProps = {
  activeTodos: Todo[],
  todosContext: TodosState
}

const TodoListActive = ({ activeTodos, todosContext}: TodoListActiveProps) => {
  return (
    <motion.ul
      variants={motionListVariants}
      initial={'hidden'}
      animate={'show'}
    >
      {activeTodos.map((todo) => (
        <motion.li
          key={todo.id}
          variants={motionListItemVariants}
          className='flex my-6'
        >
          <TodoItem todo={todo}>
            <ButtonRow>
              <ButtonComplete id={todo.id} title={todo.title} todosContext={todosContext} />
              <ButtonDelete id={todo.id} todosContext={todosContext} />
            </ButtonRow>
          </TodoItem>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default TodoListActive