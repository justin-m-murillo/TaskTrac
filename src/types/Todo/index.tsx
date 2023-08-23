export type Todo = {
  id:          string,
  title:       string,
  description: string | null,
  completed:   boolean,
  completedAt: Date | null,
  deleted:     boolean,
  deletedAt:   Date | null,
  createdAt:   Date,
  updatedAt:   Date,
}

export type TodosState = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

export type TodoListProps = {
  todos: Todo[],
  todosContext: TodosState,
}
