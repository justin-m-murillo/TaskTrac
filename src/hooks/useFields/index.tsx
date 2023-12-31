import { useState, useEffect } from 'react'
import { Todo } from "@/types/Todo"
import { Field } from "@/types/Field"
import getDateTime from '../../utils/getDateTime'
import { useTodo24HourContext } from '@/context/Todo24HourTime'

const useFields = (todo: Todo) => {
  const [ fields, setFields ] = useState<Field[]>([])
  const { is24HourTime } = useTodo24HourContext()

  useEffect(() => {
    const temp:Field[] = []
    if (todo.deletedAt) {
      temp.push({ 
        key: 'Deleted:', 
        value: getDateTime(todo.deletedAt, is24HourTime) 
    })}
    if (todo.completedAt) {
      temp.push({ 
        key: 'Completed:', 
        value: getDateTime(todo.completedAt, is24HourTime)
    })}
    if (todo.dueDate) {
      temp.push({ 
        key: 'Due:', 
        value: getDateTime(todo.dueDate, is24HourTime)
    })}
    
    if (todo.location) 
      temp.push({
        key: 'Location:',
        value: todo.location
    })
    setFields(temp)
  }, [todo, is24HourTime])

  return fields
}

export default useFields

