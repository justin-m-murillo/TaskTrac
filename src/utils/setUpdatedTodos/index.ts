import { Todo, TodosState } from "@/types/Todo";

type TSetUpdatedTodos = {
  updatedId: string;
  completedTime?: Date | null;
  deletedTime?: Date | null;
  todosContext: TodosState
}

const setUpdatedTodos = ({updatedId, todosContext: { todos, setTodos }, completedTime, deletedTime}: TSetUpdatedTodos) => {
  const newTodos = [...todos];
  const index = newTodos.findIndex(todo => todo.id === updatedId)
  newTodos[index].completed_at = completedTime ?? newTodos[index].completed_at;
  newTodos[index].deleted_at   = deletedTime   ?? newTodos[index].deleted_at;
  setTodos(newTodos);
}

export default setUpdatedTodos;

type TResetTodo = Omit<TSetUpdatedTodos, 'completedTime' | 'deletedTime'>

export const resetTodo = ({ updatedId, todosContext: { todos, setTodos } }: TResetTodo) => {
  const newTodos = [...todos];
  const index = newTodos.findIndex(todo => todo.id === updatedId);
  newTodos[index] = {
    ...newTodos[index],
    completed_at: null,
    deleted_at: null
  };
  setTodos(newTodos);
}