import { TodosState } from '../../types/Todo'

import createTodo from '../createTodo'
import deleteTodo from "../deleteTodo"

const delTodo = (id: string, title: string, todosState: TodosState) => {
  // set deleted Todo 'deleted' field to false
  deleteTodo(id, title)
  // remove deleted Todo from state
  const updatedTodos = todosState.todos.filter(todo => todo.id != id)
  // update state
  todosState.setTodos(updatedTodos)
}

const crudTodo = {
  create: createTodo,
  delete: delTodo
}

export default crudTodo