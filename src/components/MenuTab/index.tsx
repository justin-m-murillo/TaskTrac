import React from 'react'
import Link from 'next/link'
import styles from './styles'

type Props = {
  title: string,
  href: string,
}

const MenuTab = ({ title, href }: Props) => {
  return (
    <Link 
      className={styles.tab}
      href={href}
    >
      {title}
    </Link>
  )
}

export default MenuTab