import { useState, useEffect } from 'react'
import { Todo } from "@/types/Todo"
import { Field } from "@/types/Field"
import useDateTime from '../useDateTime'
import { useTodo24HourContext } from '@/context/Todo24HourTime'

const useFields = (todo: Todo) => {
  const [ fields, setFields ] = useState<Field[]>([])
  const { is24HourTime } = useTodo24HourContext()

  useEffect(() => {
    const temp:Field[] = []
    if (todo.deletedAt) {
      temp.push({ 
        key: 'Deleted', 
        value: useDateTime(todo.deletedAt, is24HourTime) 
    })}
    if (todo.completedAt) {
      temp.push({ 
        key: 'Completed', 
        value: useDateTime(todo.completedAt, is24HourTime)
    })}
    if (todo.dueDate) {
      temp.push({ 
        key: 'Due', 
        value: useDateTime(todo.dueDate, is24HourTime)
    })}
    
    if (todo.location) temp.push({
      key: 'Location',
      value: todo.location
    })
    setFields(temp)
  }, [todo])

  return fields
}

export default useFields

