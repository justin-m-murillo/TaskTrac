'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import { TodoListProps } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
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
                <ButtonComplete id={todo.id} title={todo.title} todosContext={todosContext} />,
                <ButtonDelete id={todo.id} todosContext={todosContext} />
              ]}
            />
              {/* <ButtonRow>
                <ButtonComplete id={todo.id} title={todo.title} todosContext={todosContext} />
                <ButtonDelete id={todo.id} todosContext={todosContext} />
              </ButtonRow> */}
          </motion.div>
        </Delay>
      ))}
    </AnimatePresence>
  )
}

export default TodoListActive

