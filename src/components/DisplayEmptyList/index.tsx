import React from 'react'
import styles from './styles'

type DisplayEmptyListProps = {
  listName: string,
  showAdd?: boolean,
}

const DisplayEmptyList = ({ listName, showAdd }: DisplayEmptyListProps) => {
  return (
    <div className={styles.root}>
      <p>
        {listName} is empty!
      </p>
      {showAdd &&
        <p>
          Click the 'Add' tab to create todos
        </p>
      }
    </div>
  )
}

export default DisplayEmptyList