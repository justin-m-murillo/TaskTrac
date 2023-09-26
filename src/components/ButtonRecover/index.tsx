import { Todo, TodoButtonProps } from '@/types/Todo'
import React from 'react'
import Button from '../Button'
import { MdRestoreFromTrash } from 'react-icons/md'
import { updateTodo } from '@/actions/actionsTodo'
import { useSession } from 'next-auth/react'
import { resetTodo } from '@/utils/setUpdatedTodos'


const ButtonRecover = ({ id, todosContext }: TodoButtonProps) => {
  const { data: session } = useSession();

  return (
    <Button 
      Icon={MdRestoreFromTrash}
      onClick={event => {
        event.stopPropagation()
        if (session && session?.user) {
          updateTodo({ id, completed_at: null, deleted_at: null })
            .then(upd => {
              const updatedTodo: Todo = upd.response?.data.todo;
              resetTodo({ updatedId: updatedTodo.id, todosContext })
          });
        } else {
          resetTodo({ updatedId: id, todosContext });
        }
      }}
    />
  )
}

export default ButtonRecover