import { createTodo } from "@/actions/actionsTodo";
import { Todo, TodoDateTime, TodosState } from "@/types/Todo";
import { MutableRefObject } from "react";

const onSubmitForm = (
  formRef: MutableRefObject<HTMLFormElement>,
  dueDate: TodoDateTime,
  showDueDate: boolean,
  gradient: string,
  todosContext: TodosState) => 
{
  const { todos, setTodos } = todosContext;
  const formData = new FormData(formRef.current as HTMLFormElement);
  const due = new Date(
    dueDate.year,
    dueDate.month,
    dueDate.day,
    dueDate.hours,
    dueDate.minutes,
  )
  
  const response = createTodo(
    formData, 
    showDueDate, 
    due,
    gradient,
  ).then(res => {
    const newTodo = res.response?.data?.todo as Todo;
    console.log('response', newTodo);
    setTodos([...todos, newTodo]);
  });
  console.log("ADD TODO RES", response);
}

export default onSubmitForm;