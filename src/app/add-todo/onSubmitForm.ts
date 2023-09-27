import { createTodo } from "@/actions/actionsTodo";
import { Todo, TodoDateTime, TodosState } from "@/types/Todo";
import { MutableRefObject } from "react";
import { TPostTodo } from "../api/todo/route";
import { DateTime } from "ts-luxon";
import getDateTimeInit from "@/utils/getDateTimeInit";

const { v4: uuidv4 } = require('uuid');

const onSubmitForm = (
  user_email: string | undefined | null,
  formRef: MutableRefObject<HTMLFormElement>,
  dueDate: TodoDateTime,
  showDueDate: boolean,
  gradient: string,
  todosContext: TodosState) => 
{
  const { todos, setTodos } = todosContext;

  // gather new todo data
  const formData = new FormData(formRef.current as HTMLFormElement);
  
  const month = dueDate.month+1 < 10 ? `0${dueDate.month+1}` : `${dueDate.month+1}`;
  const day   = dueDate.day < 10     ? `0${dueDate.day}`     : `${dueDate.day}`;
  const hours = dueDate.hours < 10   ? `0${dueDate.hours}`   : `${dueDate.hours}`;
  const mins  = dueDate.minutes < 10 ? `0${dueDate.minutes}` : `${dueDate.minutes}`;
  const dueISO = `${dueDate.year}-${month}-${day}T${hours}:${mins}`;
  console.log('due ISO', dueISO);

  // create todo object
  const todoData: TPostTodo = {
    user_email: user_email ?? '-',
    title: formData.get('title') as string,
    description: formData.get('description') as string | null,
    location: formData.get('location') as string | null,
    due_date: showDueDate? dueISO : null,
    bg_gradient: gradient,
    created_at: getDateTimeInit() as string,
    updated_at: getDateTimeInit() as string,
  };
  
  // if a user is logged in, add todo under user's todos
  if (user_email) {
    //console.log('IS REG:', user_email);
    todoData.user_email = user_email;
    createTodo(todoData)
      .then(res => {
        const newTodo = res.response?.data?.todo as Todo;
        if (newTodo) { setTodos([...todos, newTodo]) }
    });
  // else, create todo under 'guest' user (non-persistent)
  } else {
    //console.log('IS GUEST:', user_email);
    const newTodo: Todo = {
      ...todoData,
      id: uuidv4(),
      user_id: 'guest',
    }
    setTodos([...todos, newTodo]);
  }
}

export default onSubmitForm;