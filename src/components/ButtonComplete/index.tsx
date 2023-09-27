import { Todo, TodoButtonProps } from '@/types/Todo'
import React from 'react'
import Button from '../Button'
import { MdCheckBox } from 'react-icons/md'
import { updateTodo } from '@/actions/actionsTodo'
import setUpdatedTodos from '@/utils/setUpdatedTodos'
import { useSession } from 'next-auth/react'
import { DateTime } from 'ts-luxon'
import getDateTimeInit from '@/utils/getDateTimeInit'


const ButtonComplete = ({ id, deleted_at, todosContext }: TodoButtonProps) => {
  const { data: session } = useSession()  
  
  return (
    <Button 
      Icon={MdCheckBox}
      onClick={event => {
        event.stopPropagation();
        const completedTime = getDateTimeInit();
        if (session && session?.user) {
          updateTodo({ id, completed_at: completedTime, deleted_at })
            .then(comp => {
              const updatedTodo: Todo = comp.response?.data.todo;
              if (!updatedTodo) throw new Error('ERROR: updated todo not found')
              setUpdatedTodos({
                updatedId: updatedTodo.id,
                todosContext,
                completedTime,
          })});
        } else {
          setUpdatedTodos({
            updatedId: id,
            todosContext,
            completedTime,
          })
        }
      }}
    />
  )
}

export default ButtonComplete