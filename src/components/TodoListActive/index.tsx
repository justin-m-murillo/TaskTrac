'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonComplete from '../ButtonComplete'
import ButtonDelete from '../ButtonDelete'

import { motion, AnimatePresence } from 'framer-motion'
import { MotionListItemProps } from '@/motion/props'
import Delay from '../Delay'


const TodoListActive = ({ todos: activeTodos, todosContext}: TodoListProps) => {
  return (
    <AnimatePresence>
      {activeTodos.map((todo, index) => (
        <Delay key={todo.id} delay={index * 200}>
          <motion.div className='my-4' {...MotionListItemProps}>
            <TodoItem 
              todo={todo}
              buttons={[
                <ButtonComplete key={`btn-complete-${todo.id}`} todosContext={todosContext} {...todo} />,
                <ButtonDelete   key={`btn-delete-${todo.id}`}   todosContext={todosContext} {...todo} />
              ]}
            />
          </motion.div>
        </Delay>
      ))}
    </AnimatePresence>
  )
}

export default TodoListActive

