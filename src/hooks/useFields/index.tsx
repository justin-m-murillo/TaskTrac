import { useState, useEffect } from 'react'
import { Todo } from "@/types/Todo"
import { Field } from "@/types/Field"
import useDateTime from '../useDateTime'

type FieldState = {
  fields: Field[],
  setFields: React.Dispatch<React.SetStateAction<Field[]>>
}

const useFields = (todo: Todo) => {
  const [ fields, setFields ] = useState<Field[]>([])

  useEffect(() => {
    const temp:Field[] = []
    const time = 
      todo.deletedAt 
        ? { key: 'Deleted', value: useDateTime(todo.deletedAt) }
        : todo.completedAt 
          ? { key: 'Completed', value: useDateTime(todo.completedAt) }
          : todo.dueDate
            ? { key: 'Due', value: useDateTime(todo.dueDate)}
            : null
    if (time) temp.push(time)
    if (todo.location) temp.push({
      key: 'Location',
      value: todo.location
    })
    setFields(temp)
  }, [todo])

  return fields
}

export default useFields

const evaluateDateField = (date: Date|null, key: string, fieldsState: FieldState) => {
  const { fields, setFields } = fieldsState
  if (!date) return
  else {
    setFields([
      ...fields,
      { key: key, value: useDateTime(date) }
    ])
    console.log('Date Field Pushed',key,date)
  }
}
const evaluateStrField = (str: string|null, key: string, fieldsState: FieldState) => {
  const { fields, setFields } = fieldsState
  if (!str) return
  else {
    setFields([
      ...fields,
      { key: key, value: str }
    ])
    console.log('Str Field Pushed',key,str)
  }
}