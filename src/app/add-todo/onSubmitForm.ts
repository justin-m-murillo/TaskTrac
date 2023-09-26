import { createTodo } from "@/actions/actionsTodo";
import { Todo, TodoDateTime, TodosState } from "@/types/Todo";
import { Session } from "next-auth";
import { MutableRefObject } from "react";
import { TPostTodo } from "../api/todo/route";

const { v4: uuidv4 } = require('uuid');

const onSubmitForm = (
  user_id: string | undefined | null,
  formRef: MutableRefObject<HTMLFormElement>,
  dueDate: TodoDateTime,
  showDueDate: boolean,
  gradient: string,
  todosContext: TodosState) => 
{
  const { todos, setTodos } = todosContext;

  // gather new todo data
  const formData = new FormData(formRef.current as HTMLFormElement);
  const due = new Date(
    dueDate.year,
    dueDate.month,
    dueDate.day,
    dueDate.hours,
    dueDate.minutes,
  )

  // create todo object
  const todoData: TPostTodo = {
    title: formData.get('title') as string,
    description: formData.get('description') as string | null,
    location: formData.get('location') as string | null,
    due_date: showDueDate? due : null,
    bg_gradient: gradient,
    created_at: new Date(),
    updated_at: new Date(),
  };
  
  // if a user is logged in, add todo under user's todos
  if (user_id) {
    todoData.user_id = user_id
    createTodo(todoData)
      .then(res => {
        const newTodo = res.response?.data?.todo as Todo;
        if (newTodo) { setTodos([...todos, newTodo]) }
    });
  // else, create todo under 'guest' user (non-persistent)
  } else {
    const newTodo: Todo = {
      ...todoData,
      id: uuidv4(),
      user_id: 'guest',
    }
    setTodos([...todos, newTodo]);
  }
}

export default onSubmitForm;