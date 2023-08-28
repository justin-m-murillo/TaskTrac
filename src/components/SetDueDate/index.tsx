import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import { TodoDateTime } from '@/types/Todo'
import { 
  evalHoursAmPm,
  getMinutes, 
  getMonths, 
  useDaysOfMonth, 
  useYearsFromNow, 
  useHoursFormat, } from '@/hooks/TimeSelector'
import SetDueDateDisplay from './SetDueDateDisplay'
import Set24Hour from './Set24Hour'
import { useTodo24HourContext } from '@/context/Todo24HourTime'

type DueDateProps = {
  dueDate: TodoDateTime,
  setDueDate: React.Dispatch<React.SetStateAction<TodoDateTime>>
}

const SetDueDate = ({ dueDate, setDueDate }: DueDateProps) => {
  const { is24HourTime } = useTodo24HourContext()
  const years = useYearsFromNow(10)
  const months = getMonths()
  const daysOfMonth = useDaysOfMonth(new Date(dueDate.year, dueDate.month))
  const hoursFormat = useHoursFormat(is24HourTime)
  const minutes = getMinutes()
  const ampm = ['AM', 'PM']

  useEffect(() => {
    console.log('Due Date:', dueDate)
  }, [dueDate])

  return (
    <div className='flex flex-col w-full'>
      <SetDueDateDisplay dueDate={dueDate} />
      <div className='mb-2'>
        <Set24Hour dueDate={dueDate} setDueDate={setDueDate} />
      </div>
      <div className='flex flex-col sm:flex-row w-full'>
        <div className='flex flex-row'>
          <ItemList
            items={years.map(year => year.toString())}
            title='Year'
            currentValue={years.findIndex(year => year === dueDate.year)}
            onClick={(value: number) => {
              const year = years[value]
              setDueDate({...dueDate, year: year})
            }}
          />
          <ItemList 
            key={months.toString()}
            items={months.map(month => month.value)} 
            title='Month'
            currentValue={dueDate.month} 
            onClick={(value: number) => {
              setDueDate({ ...dueDate, month: value })
            }}
          />
          <ItemList 
            key={daysOfMonth.toString()}
            items={Array.from({ length: daysOfMonth }).map((_, index) => (index+1).toString())} 
            title='Day'
            currentValue={dueDate.day - 1} 
            onClick={(value: number) => {
              const day = value + 1
              setDueDate({ ...dueDate, day: day })
            }} 
          />
        </div>
        <div className='flex flex-row'>
          <ItemList
            key={hoursFormat.toString()} 
            items={hoursFormat} 
            title='Hour'
            currentValue={!is24HourTime ? dueDate.hours % 12 : dueDate.hours}
            onClick={(value: number) => {
              const hour = !is24HourTime 
                ? evalHoursAmPm(dueDate.ampm, value) 
                : value
              setDueDate({ ...dueDate, hours: hour })
            }}
          />
          <ItemList
            key={minutes.toString()} 
            items={minutes} 
            title='Minute'
            currentValue={dueDate.minutes} 
            onClick={(value: number) => {
              setDueDate({ ...dueDate, minutes: value })
            }}
          />
          {!is24HourTime &&
            <ItemList
              key={ampm.toString()} 
              items={ampm}
              title='AM/PM'
              currentValue={ampm.findIndex(e => e === dueDate.ampm)}
              onClick={(value: number) => {
                const ampm = value === 0 ? 'AM' : 'PM'
                const adjustHours = evalHoursAmPm(ampm, dueDate.hours)
                setDueDate({ 
                  ...dueDate,
                  hours: adjustHours, 
                  ampm: ampm,
                })
              }}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default SetDueDate