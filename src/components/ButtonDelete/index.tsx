import { Todo, TodoButtonProps } from '@/types/Todo'
import React from 'react'
import Button from '../Button'
import { updateTodo } from '@/actions/actionsTodo'
import { MdDisabledByDefault } from 'react-icons/md'
import setUpdatedTodos from '@/utils/setUpdatedTodos'
import { useSession } from 'next-auth/react'

const ButtonDelete = ({ id, completed_at, todosContext }: TodoButtonProps) => {
  const { data: session } = useSession();

  return (
    <Button
      Icon={MdDisabledByDefault}
      onClick={event => {
        event.stopPropagation()
        const deletedTime = new Date();
        if (session && session?.user) {
          updateTodo({ id, completed_at, deleted_at: deletedTime })
            .then(del => {
              const updatedTodo: Todo = del.response?.data.todo;
                if (!updatedTodo) throw new Error('ERROR: updated todo not found')
                setUpdatedTodos({
                  updatedId: updatedTodo.id,
                  todosContext,
                  deletedTime,
          })});
        } else {
          setUpdatedTodos({
            updatedId: id,
            todosContext,
            deletedTime
          })
        }
      }}
    />
  )
}

export default ButtonDelete