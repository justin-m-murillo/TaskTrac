export type Todo = {
  id:            string,
  user_id?:      string,
  title:         string,
  description:   string | null,
  location:      string | null,
  due_date:      string | null,
  bg_gradient:   string,
  completed_at?: string | null,
  deleted_at?:   string | null,
  created_at:    string,
}

export type TodosState = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export interface TodoListProps {
  todos: Todo[],
  todosContext: TodosState,
}

export interface TodoButtonProps {
  id: string;
  completed_at?: string | null | undefined;
  deleted_at?:   string | null | undefined;
  todosContext: TodosState;
}

export type TodoDateTime = {
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  ampm: string,
}
