'use client'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { motion, useAnimate, stagger, } from 'framer-motion'

type TodoNavProps = {
  tabs: React.JSX.Element[]
}

const staggerMenuItems = stagger(0.15);

const TodoNav = ({ tabs }: TodoNavProps) => {
  const [ scope, animate ] = useAnimate()
  const menuIconSize = 24

  useEffect(() => {
    animate(
      'li', 
      { 
        opacity: 1, 
        x: 0
      },
      { duration: 0.5, delay: staggerMenuItems }  
    )
  }, [scope])

  return (
    <ul
      ref={scope}
      className={styles.root}
    >
      {tabs.map((tab, index) => (
        <motion.li 
          key={index}
          initial={{ x: -50, opacity: 0 }}
        >
          { tab }
        </motion.li>
      ))}
    </ul>
  )
}

export default TodoNav