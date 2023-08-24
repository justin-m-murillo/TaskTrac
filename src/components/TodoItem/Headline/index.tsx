import React, { ReactNode } from 'react'
import styles from './styles'

type HeadlineProps = {
  title: string,
  children: ReactNode,
}

const Headline = ({ title, children }: HeadlineProps) => {
  return (
    <div className={styles.listItemMain}>
      <div className={styles.listItemHead}>
        <p className={styles.listItemTitle}>
          { title }
        </p>
      </div>
      { children }
    </div>
  )
}

export default Headline