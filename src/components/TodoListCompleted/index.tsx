'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonDeleteForever from '../ButtonDeleteForver'

import { motion } from 'framer-motion'
import { motionListVariants, motionListItemVariants } from '@/motion/variants'


const TodoListCompleted = ({ todos: completed, todosContext }: TodoListProps) => {
  return (
    <motion.ul
      variants={motionListVariants}
      initial={'hidden'}
      animate={'show'}
    >
      {completed.map(todo => (
        <motion.li
          key={todo.id}
          variants={motionListItemVariants}
          className='my-4'
        >
          <TodoItem todo={todo}>
            <ButtonRow>
              <ButtonDeleteForever id={todo.id} todosContext={todosContext} />
            </ButtonRow>
          </TodoItem>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default TodoListCompleted