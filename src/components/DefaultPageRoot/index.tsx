import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'


type DefaultPageRootProps = {
  minHeight?: number
  children: ReactNode
}

const DefaultPageRoot = ({ minHeight, children }: DefaultPageRootProps) => {
  return (
    <motion.div 
      className={`${styles.root}`} style={{ minHeight: minHeight }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      { children }
    </motion.div>
  )
}

export default DefaultPageRoot

const styles = {
  root: 'flex flex-col gap-x-2 gap-y-4 px-5 py-8 text-white bg-gray-800 rounded-2xl',
}