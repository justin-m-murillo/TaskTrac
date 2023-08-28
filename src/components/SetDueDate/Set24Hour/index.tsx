import TextRowSelector from '@/components/TextRowSelector'
import TextRowOption from '@/components/TextRowSelector/TextRowOption'
import { useTodo24HourContext } from '@/context/Todo24HourTime'
import { TodoDateTime } from '@/types/Todo'
import React, { useState } from 'react'

type Set24HourProps = {
  dueDate: TodoDateTime,
  setDueDate: React.Dispatch<React.SetStateAction<TodoDateTime>>,
}

const Set24Hour = ({ dueDate, setDueDate }: Set24HourProps) => {
  const { is24HourTime, setIs24HourTime } = useTodo24HourContext()

  return (
    <TextRowSelector prompt='Use 24-hour time?'>
      <TextRowOption 
        option='Yes' 
        isActive={is24HourTime} 
        onClick={() => {
          setDueDate({
            ...dueDate,
            hours: dueDate.hours % 24
          })
          setIs24HourTime(true)
        }}
      />
      <TextRowOption
        option='No'
        isActive={!is24HourTime}
        onClick={() => {
          setDueDate({
            ...dueDate,
            ampm: dueDate.hours > 11 ? 'PM' : 'AM',
          })
          setIs24HourTime(false)
        }}
      />
    </TextRowSelector>
  )
}

export default Set24Hour