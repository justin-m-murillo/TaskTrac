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
    if (todo.deleted_at) {
      temp.push({ 
        key: 'Deleted:', 
        value: getDateTime(todo.deleted_at.toISOString(), is24HourTime) 
    })}
    if (todo.completed_at) {
      temp.push({ 
        key: 'Completed:', 
        value: getDateTime(todo.completed_at.toISOString(), is24HourTime)
    })}
    if (todo.due_date) {
      temp.push({ 
        key: 'Due:', 
        value: getDateTime(todo.due_date.toISOString(), is24HourTime)
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

