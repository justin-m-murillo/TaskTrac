'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonDeleteForever from '../ButtonDeleteForver'

import { motion, AnimatePresence } from 'framer-motion'
import Delay from '../Delay'
import { MotionListItemProps } from '@/motion/props'


const TodoListCompleted = ({ todos: completedTodos, todosContext }: TodoListProps) => {
  return (
    <AnimatePresence>
      {completedTodos.map((todo, index) => (
        <Delay key={todo.id} delay={index * 200}>
          <motion.div className='my-4' {...MotionListItemProps}>
            <TodoItem 
              todo={todo}
              buttons={[
                <ButtonDeleteForever id={todo.id} todosContext={todosContext} />
              ]}
            />
          </motion.div>
        </Delay>
      ))}
    </AnimatePresence>
  )
}

export default TodoListCompleted