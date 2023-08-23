'use client'
import { createContext, useContext } from "react";
import { TodoNavState } from "@/types/TodoNav";

export const TodoNavContext = createContext<TodoNavState>({
  activeTab: '',
  setActiveTab: () => {},
})

export const useTodoNavContext = () => useContext(TodoNavContext)