import NextAuth from "next-auth";
import { Todo } from "./Todo";

export interface SessionUser {
  id: string;
  name?: string | null
  email?: string | null
  image?: string | null
}

declare module "next-auth" {
  interface Session {
    user: SessionUser
  }
}