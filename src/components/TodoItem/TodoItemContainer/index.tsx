import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { MotionItemWhileHover } from '@/motion/gestures'
import useItemContainerHover from '@/hooks/useItemContainerHover'
import { Todo } from '@/types/Todo'

type TodoItemContainerProps = {
  todo: Todo
  gradient?: string
  children: ReactNode
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  isStatic?: boolean
}

const TodoItemContainer = ({
  todo,
  gradient, 
  children, 
  onMouseEnter, 
  onMouseLeave, 
  isStatic }: TodoItemContainerProps) =>
{
  const motionObj = useItemContainerHover(todo)

  if (isStatic)
    return (
      <div className={`${styles.root} ${gradient} ${styles.gradientHover} cursor-pointer`}>
        { children }
      </div>
    )
  else 
    return (
      <motion.div
        initial={{ height: 60 }}
        whileHover={motionObj ?? undefined}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} 
        className={`${styles.root} ${gradient} ${styles.gradientHover}`}
      >
        { children }
      </motion.div>
    )
}

export default TodoItemContainer

const styles = {
  root: 'w-full rounded-xl px-4 py-2 bg-gradient-to-r',
  gradientHover: 'bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] transition-all duration-500',
}