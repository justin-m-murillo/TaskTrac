import React, { ReactNode } from 'react'
import styles from './styles'

type ButtonRowProps = {
  children?: ReactNode
}

const ButtonRow = ({ children }: ButtonRowProps) => {
  return (
    <div className={styles.root}>
      { children }
    </div>
  )
}

export default ButtonRow