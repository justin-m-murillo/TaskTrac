import React from 'react'
import styles from './styles'
import { useRouter } from 'next/navigation'
import { IconType } from 'react-icons/lib'

export type OpenTabState = {
  openTab: string,
  setOpenTab: React.Dispatch<React.SetStateAction<string>>
}

type Props = {
  title?: string,
  Icon: IconType,
  iconSize: number,
  href?: string,
  activeTab?: string,
  onClick: (href?: string) => void,
  isStatic?: boolean
}

const TodoNavTab = ({ title, Icon, iconSize, href, activeTab, onClick, isStatic }: Props) => {
  const router = useRouter()

  if (isStatic) {
    return (
      <button
        className={`${styles.tab}`}
        onClick={() => onClick(href) }
      >
        <Icon className={`${styles.icon} ${href && href === activeTab ? styles.openTabText : ''}`} size={iconSize} />
        <p className={`${href === activeTab ? styles.openTabText : ''}`}>{title}</p>
      </button>
  )}
  else {
    return (
      <button
        className={`${styles.tab}`}
        onClick={() => onClick(href) }
      >
        <Icon className={`${styles.icon} ${href && href === activeTab ? styles.openTabText : ''}`} size={iconSize} />
        <p className={`${href === activeTab ? styles.openTabText : ''}`}>{title}</p>
      </button>
  )} 
}

export default TodoNavTab