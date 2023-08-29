'use client'
import React from 'react'
import TodoItem from '@/components/TodoItem'
import TodoItemMotion from '../TodoItemMotion'
import { Todo, TodosState } from '@/types/Todo'
import ButtonRow from '../TodoItem/ButtonRow'
import ButtonComplete from '../ButtonComplete'
import ButtonDelete from '../ButtonDelete'

import { motion, AnimatePresence } from 'framer-motion'
import { motionListVariants, motionListItemVariants } from '@/motion/variants'
import Delay from '../Delay'

type TodoListActiveProps = {
  activeTodos: Todo[],
  todosContext: TodosState
}

const motionProps = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0 },
  transition: {
    type: 'spring',
    stiffness: 100,
  }
}

const TodoListActive = ({ activeTodos, todosContext}: TodoListActiveProps) => {
  return (
    <AnimatePresence>
      {activeTodos.map((todo, index) => (
        <Delay key={todo.id} delay={index * 200}>
          <motion.div
            {...motionProps}
            className='my-4'
          >
            <TodoItem todo={todo}>
              <ButtonRow>
                <ButtonComplete id={todo.id} title={todo.title} todosContext={todosContext} />
                <ButtonDelete id={todo.id} todosContext={todosContext} />
              </ButtonRow>
            </TodoItem>
          </motion.div>
        </Delay>
      ))}
    </AnimatePresence>
  )
}

export default TodoListActive

