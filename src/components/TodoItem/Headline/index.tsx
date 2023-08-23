import React, { ReactNode } from 'react'
import styles from './styles'

type HeadlineProps = {
  title: string,
  ButtonRow: ReactNode,
}

const Headline = ({ title, ButtonRow }: HeadlineProps) => {
  return (
    <div className={styles.listItemMain}>
      <div className={styles.listItemHead}>
        <p className={styles.listItemTitle}>
          { title }
        </p>
      </div>
      { ButtonRow }
    </div>
  )
}

export default Headline