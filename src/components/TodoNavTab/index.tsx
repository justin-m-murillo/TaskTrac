import React from 'react'
import styles from './styles'
import { useRouter } from 'next/navigation'
import { IconType } from 'react-icons/lib'

import { useTodoNavContext } from '@/context/TodoNavContext'

export type OpenTabState = {
  openTab: string,
  setOpenTab: React.Dispatch<React.SetStateAction<string>>
}

type Props = {
  title: string,
  Icon: IconType,
  href: string,
  isLeft?: boolean,
  isRight?: boolean,
}

const TodoNavTab = ({ title, Icon, href, isLeft, isRight }: Props) => {
  const router = useRouter()
  const { activeTab, setActiveTab } = useTodoNavContext()

  const handleClick = () => {
    setActiveTab(href)
    router.push(href)
  }

  return (
      <button 
        className={`
          ${styles.tab} 
          ${isLeft ? styles.tabLeft : isRight ? styles.tabRight : ''}
        `}
        onClick={handleClick}
      >
        <Icon className={`${styles.icon} ${href === activeTab ? styles.openTabText : ''}`} size={20} />
        <p className={`${href === activeTab ? styles.openTabText : ''}`}>{title}</p>
      </button>
  )
}

export default TodoNavTab