export type Todo = {
  id: string,
  title: string,
  createdAt: Date,
  updatedAt: Date,
}

export type TodosState = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}
