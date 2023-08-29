'use client'
import React from 'react'
import TodoItem from '../TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonRecover from '../ButtonRecover'

import { motion, AnimatePresence } from 'framer-motion'
import Delay from '../Delay'
import { MotionListItemProps } from '@/motion/props'

const TodoListDeleted = ({ todos: deletedTodos, todosContext }: TodoListProps) => {
  return (
    <AnimatePresence>
      {deletedTodos.map((todo, index) => (
        <Delay key={todo.id} delay={index * 200}>
          <motion.div className='my-4' {...MotionListItemProps}>
            <TodoItem todo={todo}>
              <ButtonRow>
                <ButtonRecover id={todo.id} todosContext={todosContext} />
              </ButtonRow>
            </TodoItem>
          </motion.div>
        </Delay>
      ))}
    </AnimatePresence>
  )
}

export default TodoListDeleted