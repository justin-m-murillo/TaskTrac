import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { itemContainerWhileHover } from '@/motion/gestures'

type TodoItemContainerProps = {
  gradient?: string,
  children: ReactNode,
  onMouseEnter?: React.MouseEventHandler,
  onMouseLeave?: React.MouseEventHandler,
  isStatic?: boolean,
}

const TodoItemContainer = ({ gradient, children, onMouseEnter, onMouseLeave, isStatic }: TodoItemContainerProps) => {
  if (isStatic)
    return (
      <div className={`${styles.root} ${gradient} ${styles.gradientHover} cursor-pointer`}>
        { children }
      </div>
    )
  else 
    return (
      <motion.div
        initial={{ height: 80 }}
        whileHover={itemContainerWhileHover}
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
  root: 'flex flex-col w-full rounded-xl px-4 py-2 bg-gradient-to-r',
  gradientHover: 'bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] transition-all duration-500',
}