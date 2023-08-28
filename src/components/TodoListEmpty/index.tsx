import React from 'react'
import DefaultPageRoot from '../DefaultPageRoot'

type DisplayEmptyListProps = {
  alertText: string,
  showAdd?: boolean,
}

const TodoListEmpty = ({ alertText, showAdd }: DisplayEmptyListProps) => {
  return (
    <DefaultPageRoot>
      <p className={styles.text}>
        {alertText}
      </p>
      {showAdd &&
        <p className={styles.text}>
          Click the 'Add' tab to create todos
        </p>
      }
    </DefaultPageRoot>
  )
}

export default TodoListEmpty

const styles = {
  text: 'flex w-full items-center justify-center',
}