import React from 'react'
import styles from './styles'

type DisplayEmptyListProps = {
  alertText: string,
  showAdd?: boolean,
}

const TodoListEmpty = ({ alertText, showAdd }: DisplayEmptyListProps) => {
  return (
    <div className={styles.root}>
      <p>
        {alertText}
      </p>
      {showAdd &&
        <p>
          Click the 'Add' tab to create todos
        </p>
      }
    </div>
  )
}

export default TodoListEmpty