'use client'
import React, { useEffect } from 'react'
import styles from './styles'
import { motion, useAnimate, stagger, } from 'framer-motion'

import { useRouter } from 'next/navigation'
import getNavTabs from '@/utils/getNavTabs'
import { useSession } from 'next-auth/react'
import Header from '../Header'

const staggerMenuItems = stagger(0.15);

const TodoNav = () => {
  const [ scope, animate ] = useAnimate();
  const { data: session } = useSession()
  const router = useRouter();
  const tabs = getNavTabs((href?: string) => href 
    ? router.push(href) 
    : router.push('/'));

  useEffect(() => {
    animate(
      'li', 
      { 
        opacity: 1, 
        x: 0
      },
      { duration: 0.5, delay: staggerMenuItems }  
    )
  }, [scope, animate])

  return (
    <div className='flex flex-col'>
      <Header title='TaskTrac' session={session} />
      <div className='flex flex-row mb-4 w-full justify-between'>
        <ul
          ref={scope}
          className={styles.root}
        >
          {tabs.map(tab => (
            <motion.li 
              key={tab.key}
              initial={{ x: -50, opacity: 0 }}
            >
              { tab }
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoNav