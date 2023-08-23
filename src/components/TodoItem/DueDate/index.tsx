import React from 'react'
import styles from './styles'
import useDateTime from '@/hooks/useDateTime'

type DueDateProps = {
  dueDate: Date | null
}

const DueDate = ({ dueDate }: DueDateProps) => {
  return (
    <>
      {dueDate &&
        <div className={styles.root}>
          <p><span className={styles.due}>Due:</span>{useDateTime(dueDate)}</p>
        </div>
      }
    </>
  )
}

export default DueDate