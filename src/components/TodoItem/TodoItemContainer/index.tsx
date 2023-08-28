import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'

type TodoItemContainerProps = {
  gradient: string,
  children: ReactNode,
  onClick?: React.MouseEventHandler
}

const TodoItemContainer = ({ gradient, children, onClick }: TodoItemContainerProps) => {
  return (
    <motion.div
      initial={{ height: 80 }}
      whileHover={{ 
        height: 300,
        transition: {
          ease: 'linear',
          duration: 0.2,
        }
      }}
      onClick={onClick} 
      className={`${styles.root} ${gradient} ${styles.gradientHover}`}
    >
      { children }
    </motion.div>
  )
}

export default TodoItemContainer

const styles = {
  root: 'flex flex-col w-full rounded-xl cursor-pointer z-0 px-4 py-2 bg-gradient-to-r',
  gradientHover: 'bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] transition-all duration-500',
}