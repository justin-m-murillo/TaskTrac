import React from 'react'
import styles from './styles'
import { usePathname, useRouter } from 'next/navigation'
import { IconType } from 'react-icons/lib'

type Props = {
  title?: string,
  Icon: IconType,
  iconSize: number,
  href?: string,
  activeTab?: string,
  onClick: (href?: string) => void,
}

const TodoNavTab = ({ title, Icon, iconSize, href, onClick, }: Props) => {
  const pathname = usePathname()
  
  return (
    <button
      className={`${styles.tab}`}
      onClick={() => onClick(href) }
    >
      <Icon className={`${styles.icon} ${href && href === pathname ? styles.openTabText : ''}`} size={iconSize} />
      <p className={`${href === pathname ? styles.openTabText : ''}`}>{title}</p>
    </button>
)
}

export default TodoNavTab