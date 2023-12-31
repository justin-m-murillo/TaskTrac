import { TodoButtonProps } from '@/types/Todo'
import React from 'react'
import Button from '../Button'
import { MdRestoreFromTrash } from 'react-icons/md'
import { actionRecoverTodo } from '@/actions/actionsTodo'


const ButtonRecover = ({ id, todosContext }: TodoButtonProps) => {
  return (
    <Button 
      Icon={MdRestoreFromTrash}
      onClick={event => {
        event.stopPropagation()
        actionRecoverTodo(id, todosContext)
      }}
    />
  )
}

export default ButtonRecover