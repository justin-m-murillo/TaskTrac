import React from 'react'

import { Todo } from '@/types/Todo'
import { DisplayProps } from '@/types/DisplayProps'
import TodoItem from '../TodoItem'
import Button from '../Button'

// const TodoCompletedDisplay = ({ data: todos }: DisplayProps) => {

//   return (
//     <ul>
//       {todos.map(todo => (
//         <TodoItem key={todo.id} {...todo} />
//       ))}
//     </ul>
//   )
// }

// export default TodoCompletedDisplay