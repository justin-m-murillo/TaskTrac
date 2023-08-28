import { useTodo24HourContext } from '@/context/Todo24HourTime'
import { getDateString } from '@/hooks/TimeSelector'
import { TodoDateTime } from '@/types/Todo'
import React from 'react'

type SetDueDateDisplayProps = {
  dueDate: TodoDateTime,
}

const SetDueDateDisplay = ({ dueDate }: SetDueDateDisplayProps) => {
  const { is24HourTime } = useTodo24HourContext()
  return (
    <div className='flex flex-col sm:flex-row mb-2'>
      <p className='mr-2'>Selected Date/Time:</p>
      <p className='font-semibold'>{ getDateString(dueDate, is24HourTime) }</p>
    </div>
  )
}

export default SetDueDateDisplay