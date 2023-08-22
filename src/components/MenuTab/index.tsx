import React from 'react'
import styles from './styles'
import { useRouter } from 'next/navigation'
import { IconType } from 'react-icons/lib'

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
  openTabState: OpenTabState,
}

const MenuTab = ({ title, Icon, href, openTabState, isLeft, isRight }: Props) => {
  const router = useRouter()
  const { openTab, setOpenTab } = openTabState
  const handleClick = () => {
    setOpenTab(href)
    router.push(href)
  }

  return (
      <button 
        className={`
          ${styles.tab} 
          ${isLeft ? styles.tabLeft : isRight ? styles.tabRight : ''} 
          ${href === openTab ? styles.openTabBtn : styles.notOpenTabBtn}
        `}
        onClick={handleClick}
      >
        <Icon className={`${styles.icon} ${href === openTab ? styles.openTabText : ''}`} size={20} />
        <p className={`${href === openTab ? styles.openTabText : ''}`}>{title}</p>
      </button>
  )
}

export default MenuTab