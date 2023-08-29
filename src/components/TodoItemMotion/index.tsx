import React, { ReactNode, forwardRef, Ref } from 'react'
import Delay from '../Delay'
import { motion } from 'framer-motion'

type Props = {
  index: number
  children: ReactNode
}

const TodoItemMotion = forwardRef(({ index, children }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <Delay delay={index * 200}>
      <div
        ref={ref}
        className='my-4'
      >
        { children }
      </div>
    </Delay>
  )
})

export default TodoItemMotion