'use client'
import { createContext, useContext } from "react"
import { Todo24HourState } from "@/types/Todo24HourTime"

export const Todo24HourContext = createContext<Todo24HourState>({
  is24HourTime: false,
  setIs24HourTime: () => {},
})

export const useTodo24HourContext = () => useContext(Todo24HourContext)