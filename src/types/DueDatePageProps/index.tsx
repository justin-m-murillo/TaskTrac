import { TodoDateTime } from "../Todo";

export type DueDatePageProps = {
  option: string,
  dueDate?: TodoDateTime,
  setDueDate: React.Dispatch<React.SetStateAction<TodoDateTime>>,
  setShowDueDate: React.Dispatch<React.SetStateAction<boolean>>,
}