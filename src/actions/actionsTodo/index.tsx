import { TodosState } from '../../types/Todo'
import { serverActivateTodo, serverCreateTodo, serverCompleteTodo, serverDeleteTodo, serverDeleteForever } from '@/actions/serverActionsTodo'
import { redirect } from 'next/navigation'

export const actionCreateTodo = (
  data: FormData,
  dueDate: Date,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>, 
  todosState: TodosState,) => 
{
  const { todos, setTodos } = todosState
  // create new todo item
  serverCreateTodo(data, dueDate)
    .then(created => {
      setTodos([...todos, created])
      setActiveTab('/home')
    })
    .catch(error => console.warn('Error in create todo', error))
    redirect('/home')
}

export const actionDeleteTodo = (
  id: string,
  todosState: TodosState) => 
{
  const { todos, setTodos } = todosState
  // set deleted Todo 'deleted' field to true
  serverDeleteTodo(id)
    .then(deleted => {
      const newTodos = [...todos]
      const index = newTodos.findIndex(todo => todo.id === deleted.id)
      newTodos[index].deleted = true
      newTodos[index].deletedAt = new Date()
      setTodos(newTodos)
})}

export const actionDeleteForever = (
  id: string,
  todosState: TodosState) =>
{
  const { todos, setTodos } = todosState
  // delete Todo from records forever
  serverDeleteForever(id)
    .then(deleted => {
      const newTodos = todos.filter(todo => todo.id !== deleted.id)
      setTodos(newTodos)
    })
}

export const actionCompleteTodo = (
  id: string, 
  title: string, 
  todosState: TodosState) => 
{
  const { todos, setTodos } = todosState
  // set completed Todo 'completed' field to true
  serverCompleteTodo(id)
    .then(completed => {
      // update context
      const newTodos = [...todos]
      const index = newTodos.findIndex(todo => todo.id === completed.id)
      newTodos[index].completed = true
      newTodos[index].completedAt = new Date()
      setTodos(newTodos)
})}

export const actionRecoverTodo = (
  id: string, 
  todosState: TodosState
) => {
  const { todos, setTodos } = todosState
  // set inactive Todo back to active
  serverActivateTodo(id)
    .then(activated => {
      // update context
      const newTodos = [...todos]
      const index = newTodos.findIndex(todo => todo.id === activated.id)
      newTodos[index].completed = false
      newTodos[index].completedAt = null
      newTodos[index].deleted = false
      newTodos[index].deletedAt = null
      setTodos(newTodos)
})}