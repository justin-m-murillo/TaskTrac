export type Todo = {
  id:           string,
  user_id:      string,
  title:        string,
  description:  string | null,
  location:     string | null,
  due_date:     Date | null,
  bg_gradient:   string,
  completed_at: Date | null,
  deleted_at:   Date | null,
  created_at:   Date,
  updated_at:   Date,
}

export type TodosState = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export interface TodoListProps {
  todos: Todo[],
  //todosContext: TodosState,
}

export interface TodoButtonProps {
  id: string,
  todosContext: TodosState,
}

export type TodoDateTime = {
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  ampm: string,
}
