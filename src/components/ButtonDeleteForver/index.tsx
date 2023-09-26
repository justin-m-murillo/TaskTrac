import React from 'react'
import Button from '../Button'

import { MdDeleteForever } from 'react-icons/md'
import { Todo, TodoButtonProps } from '@/types/Todo'

import { deleteTodo } from '@/actions/actionsTodo'
import { useSession } from 'next-auth/react'

const ButtonDeleteForever = ({ id, todosContext: { todos, setTodos } }: TodoButtonProps) => {
  const { data: session } = useSession();
  
  return (
    <Button 
      Icon={MdDeleteForever}
      onClick={event => {
        event.stopPropagation()
        if (session && session?.user) {
          deleteTodo(id)
            .then(delf => {
              const deletedForeverId: string = delf.response?.data.deleted.id;
              const newTodos = todos.filter(todo => todo.id !== deletedForeverId);
              setTodos(newTodos);
          });
        } else {
          const newTodos = todos.filter(todo => todo.id !== id);
          setTodos(newTodos);
        }
      }}
    />
  )
}

export default ButtonDeleteForever