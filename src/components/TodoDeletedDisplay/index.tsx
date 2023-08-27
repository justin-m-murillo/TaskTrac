'use client'
import React, { useState } from 'react'
import TodoItem from '../TodoItem'
import Button from '../Button'

import { DisplayProps } from '@/types/DisplayProps'
import { Todo, TodosState } from '@/types/Todo'

import { actTodo } from '@/actions/actionsTodo'
import { MdRestoreFromTrash } from 'react-icons/md'

// const TodoDeletedDisplay = ({ data }: DisplayProps) => {
//   const [ todos, setTodos ] = useState<Todo[]>(data)

//   const delTodosState: TodosState = {
//     todos: todos,
//     setTodos: setTodos
//   }

//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem key={todo.id} {...todo}>
//           <Button 
//             Icon={MdRestoreFromTrash} 
//             hover='hover:text-blue-500' 
//             onClick={() => actTodo(todo.id, todo.title, delTodosState)}
//           />
//         </TodoItem>
//       ))}
//     </ul>
//   )
// }

// export default TodoDeletedDisplay