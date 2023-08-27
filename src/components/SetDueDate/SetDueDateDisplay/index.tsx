import { getDateString } from '@/hooks/TimeSelector'
import { TodoDateTime } from '@/types/Todo'
import React from 'react'

type SetDueDateDisplayProps = {
  dueDate: TodoDateTime,
}

const SetDueDateDisplay = ({ dueDate }: SetDueDateDisplayProps) => {
  return (
    <div className='flex flex-row mb-2'>
      <p>Selected Date/Time:</p>
      <p className='ml-2 font-semibold'>{ getDateString(dueDate) }</p>
    </div>
  )
}

export default SetDueDateDisplay