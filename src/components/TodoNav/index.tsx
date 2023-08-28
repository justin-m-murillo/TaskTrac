'use client'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import { motion, useAnimate, stagger, } from 'framer-motion'

type TodoNavProps = {
  tabs: React.JSX.Element[]
  isOpen: boolean
}

const staggerMenuItems = stagger(0.15);

const TodoNav = ({ tabs, isOpen }: TodoNavProps) => {
  const [ scope, animate ] = useAnimate()
  const menuIconSize = 24

  useEffect(() => {
    animate(
      'li', 
      isOpen 
        ? { opacity: 1, x: 0 } 
        : { opacity: 0, x: -50 }, 
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }  
    )
  }, [isOpen])

  return (
    <ul
      ref={scope}
      className={styles.root}
    >
      {tabs.map((tab, index) => (
        <li key={index}>
          { isOpen && tab }
        </li>
      ))}
    </ul>
  )
}

export default TodoNav