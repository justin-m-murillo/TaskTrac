import { TodoDateTime } from '@/types/Todo'
import React, { useState } from 'react'

type Set24HourProps = {
  dueDate: TodoDateTime,
  setDueDate: React.Dispatch<React.SetStateAction<TodoDateTime>>,
}

const Set24Hour = ({ dueDate, setDueDate }: Set24HourProps) => {
  const [ isAmPm, setIsAmPm ] = useState<boolean>(dueDate.isAmPm)

  return (
    <div className='flex flex-row mb-2'>
      <div className='flex flex-row text-sm'>
        <p className='mr-2'>Use 24-hour time?</p>
        <div 
          className={`${styles.option} ${!isAmPm && styles.isActive}`}
          onClick={() => {
            setDueDate({
              ...dueDate,
              isAmPm: false,
              hours: dueDate.hours % 24
            })
            setIsAmPm(false)
          }}
        >
          <p>Yes</p>
        </div>
        <div 
          className={`${styles.option} ${isAmPm && styles.isActive}`}
          onClick={() => {
            setDueDate({
              ...dueDate,
              isAmPm: true,
              hours: dueDate.hours % 12
            })
            setIsAmPm(true)
          }}
        >
          <p>No</p>
        </div>
      </div>
    </div>
  )
}

export default Set24Hour

const styles = {
  option: 'mr-2 cursor-pointer select-none hover:text-sky-500',
  isActive: 'text-sky-500'
}