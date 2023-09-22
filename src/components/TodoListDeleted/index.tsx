'use client'
import React from 'react'
import TodoItem from '../TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRecover from '../ButtonRecover'

import { motion, AnimatePresence } from 'framer-motion'
import Delay from '../Delay'
import { MotionListItemProps } from '@/motion/props'
import ButtonDeleteForever from '../ButtonDeleteForver'

const TodoListDeleted = ({ todos: deletedTodos, todosContext }: TodoListProps) => {
  return (
    <AnimatePresence>
      {deletedTodos.map((todo, index) => (
        <Delay key={todo.id} delay={index * 200}>
          <motion.div className='my-4' {...MotionListItemProps}>
            <TodoItem 
              todo={todo}
              buttons={[
                <ButtonRecover key={`btn-recover-${todo.id}`} id={todo.id} todosContext={todosContext} />,
                <ButtonDeleteForever key={`btn-deleteforever-${todo.id}`} id={todo.id} todosContext={todosContext} />,
              ]}
            />
          </motion.div>
        </Delay>
      ))}
    </AnimatePresence>
  )
}

export default TodoListDeleted