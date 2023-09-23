import { Session } from "next-auth"

export type SessionTodo = Session & {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}