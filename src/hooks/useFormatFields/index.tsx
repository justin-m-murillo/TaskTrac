import { useState, useEffect, SetStateAction } from 'react'
import { Todo } from "@/types/Todo"
import { Field } from "@/types/Field"
import useDateTime from '../useDateTime'

const useFormatFields = (todo: Todo) => {
  const [ fields, setFields ] = useState<Field[]>([])

  
  
  useEffect(() => {
    evaluateDateField(todo.completedAt, 'Completed:', fields, setFields)
    evaluateDateField(todo.deletedAt, 'Deleted:', fields, setFields)
  }, [todo])

  return todo
}

export default useFormatFields

const evaluateDateField = (date: Date|null, key: string, fields: Field[], setFields: React.Dispatch<SetStateAction<Field[]>>) => {
  if (!date) return
  else {
    setFields([
      ...fields,
      { key: key, value: useDateTime(date)}
    ])
  }
}
const evaluateStrField = (str: string|null, key: string, fields: Field[], setFields: React.Dispatch<SetStateAction<Field[]>>) => {
  if (!str) return
  else {
    setFields([
      ...fields,
      { key: 'Completed:', value: str}
    ])
  }
}