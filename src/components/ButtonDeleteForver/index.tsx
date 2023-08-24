import React from 'react'
import Button from '../Button'

import { MdDeleteForever } from 'react-icons/md'
import { TodoButtonProps } from '@/types/Todo'

import { actionDeleteForever } from '@/actions/actionsTodo'

const ButtonDeleteForever = ({ id, todosContext }: TodoButtonProps) => {
  return (
    <Button 
      Icon={MdDeleteForever} 
      hover='hover:text-orange-500'
      onClick={event => {
        event.stopPropagation()
        actionDeleteForever(id, todosContext)
      }}
    />
  )
}

export default ButtonDeleteForever