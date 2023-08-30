import { TodoButtonProps } from '@/types/Todo'
import React from 'react'
import Button from '../Button'
import { actionDeleteTodo } from '@/actions/actionsTodo'
import { MdDisabledByDefault } from 'react-icons/md'


const ButtonDelete = ({ id, todosContext }: TodoButtonProps) => {
  return (
    <Button
      Icon={MdDisabledByDefault}
      size={28}
      onClick={event => {
        event.stopPropagation()
        actionDeleteTodo(id, todosContext)
      }}
    />
  )
}

export default ButtonDelete