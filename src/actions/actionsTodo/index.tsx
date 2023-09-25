import axios from 'axios'
import { TodosState } from '../../types/Todo'
import { serverActivateTodo, serverCreateTodo, serverCompleteTodo, serverDeleteTodo, serverDeleteForever } from '@/actions/serverActionsTodo'
import { TGetTodo, TPostTodo } from '@/app/api/todo/route';
//import { redirect } from 'next/navigation'

export const getTodos = async ({ user_id }: TGetTodo) => {
  //console.log('GET TODOS');
  try {
    const response = await axios.get('/api/todo', {
      params: {
        id: user_id,
      }
    });
    return { message: 'GET TODOS SUCCESS', response }
  } catch (error) {
    return { message: 'GET TODOS FAILED', error }
  }
  
}

export const createTodo = async (
  data: FormData,
  showDueDate: boolean,
  due: Date,
  gradient: string) => 
{
  const todoData: TPostTodo = {
    title: data.get('title') as string,
    description: data.get('description') as string | null,
    location: data.get('location') as string | null,
    due_date: showDueDate? due : null,
    bg_gradient: gradient,
  };

  try {
    const response = await axios.post('/api/todo', todoData);
    console.log('ACTION CREATED', response.data);
    return { message: 'CREATE TODO SUCCESS', response }
  } catch (error) {
    return { message: 'CREATE TODO FAILED', error };
  }
};

export const actionDeleteTodo = (
  id: string,
  todosState: TodosState) => 
{
  const { todos, setTodos } = todosState
  // set deleted Todo 'deleted' field to true
  // serverDeleteTodo(id)
  //   .then(deleted => {
  //     const newTodos = [...todos]
  //     const index = newTodos.findIndex(todo => todo.id === deleted.id)
  //     newTodos[index].deleted = true
  //     newTodos[index].deletedAt = new Date()
  //     setTodos(newTodos)
  // })
}

export const actionDeleteForever = (
  id: string,
  todosState: TodosState) =>
{
  const { todos, setTodos } = todosState
  // delete Todo from records forever
  // serverDeleteForever(id)
  //   .then(deleted => {
  //     const newTodos = todos.filter(todo => todo.id !== deleted.id)
  //     setTodos(newTodos)
  //   })
}

export const actionCompleteTodo = (
  id: string, 
  title: string, 
  todosState: TodosState) => 
{
  const { todos, setTodos } = todosState
  // set completed Todo 'completed' field to true
  // serverCompleteTodo(id)
  //   .then(completed => {
  //     // update context
  //     const newTodos = [...todos]
  //     const index = newTodos.findIndex(todo => todo.id === completed.id)
  //     newTodos[index].completed = true
  //     newTodos[index].completedAt = new Date()
  //     setTodos(newTodos)
  // })
}

export const actionRecoverTodo = (
  id: string, 
  todosState: TodosState
) => {
  const { todos, setTodos } = todosState
  // set inactive Todo back to active
  // serverActivateTodo(id)
  //   .then(activated => {
  //     // update context
  //     console.log('Activated',activated)
  //     const newTodos = [...todos]
  //     const index = newTodos.findIndex(todo => todo.id === activated.id)
  //     newTodos[index].completed = false
  //     newTodos[index].completedAt = null
  //     newTodos[index].deleted = false
  //     newTodos[index].deletedAt = null
  //     setTodos(newTodos)
  // })
}