import { Session } from 'next-auth'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  title: string;
  session: Session | null;
}

const Header = ({ title, session }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-row mb-4 pr-4 text-gray-400 items-center justify-between'
    >
      <h1 className='text-2xl font-semibold'>{title}</h1>
      {session && session.user && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-gray-600'
        >
          viewing <span className='font-semibold'>{session.user.name}'s</span> tasks
        </motion.p>
      )}
    </motion.div>
  )
}

export default Header