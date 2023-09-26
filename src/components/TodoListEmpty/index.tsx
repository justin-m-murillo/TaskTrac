import React from 'react'
import DefaultPageRoot from '../DefaultPageRoot'
import { signIn } from 'next-auth/react'

type DisplayEmptyListProps = {
  alertText: string,
  showAdd?: boolean,
}

const TodoListEmpty = ({ alertText, showAdd }: DisplayEmptyListProps) => {
  const signInStyle = 'underline underline-offset-2 hover:text-sky-500 cursor-pointer';
  const handleSignIn = () => {
    signIn('google', {
      callbackUrl: '/',
    })
  }

  return (
    <DefaultPageRoot>
      <p className={styles.text}>
        {alertText}
      </p>
      {showAdd &&
        <>
          <p className={styles.text}>
            Click the &apos;Add&apos; tab to create tasks
          </p>
          <div className={styles.text}>
            <p>Or <span className={signInStyle} onClick={handleSignIn}>sign in</span> to view your saved tasks</p>
          </div>
          
        </>
      }
    </DefaultPageRoot>
  )
}

export default TodoListEmpty

const styles = {
  text: 'flex w-full items-center justify-center',
}