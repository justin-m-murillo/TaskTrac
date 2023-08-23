import React, { ReactNode } from 'react'
import styles from './styles'

type ButtonRowProps = {
  buttons?: ReactNode[]
}

const ButtonRow = ({ buttons }: ButtonRowProps) => {
  return (
    <div className={styles.root}>
      {buttons?.map((Btn, index) => (
        <div className='flex items-center justify-center' key={index}>
          {Btn}
        </div>
      ))}
    </div>
  )
}

export default ButtonRow