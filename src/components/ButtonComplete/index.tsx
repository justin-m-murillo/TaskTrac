import { TodoButtonProps } from '@/types/Todo'
import React from 'react'
import Button from '../Button'
import { MdCheckBox } from 'react-icons/md'
import { actionCompleteTodo } from '@/actions/actionsTodo'

interface TodoButtonCompleteProps extends TodoButtonProps {
  title: string,
}

const ButtonComplete = ({ id, title, todosContext }: TodoButtonCompleteProps) => {
  return (
    <Button 
      Icon={MdCheckBox} 
      hover='hover:text-green-700' 
      onClick={event => {
        event.stopPropagation()
        actionCompleteTodo(
          id, 
          title, 
          todosContext,
        )
      }}
    />
  )
}

export default ButtonComplete