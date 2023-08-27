import React, { useState, useEffect } from 'react'
import ScrollSelector from '../ScrollSelector'
import ItemList from '../ScrollSelector/ItemList'
import { TodoDateTime } from '@/types/Todo'
import { 
  evalHoursAmPm,
  getMinutes, 
  getMonths, 
  useDaysOfMonth, 
  useYearsFromNow, 
  useHoursFormat, 
  getDateString} from '@/hooks/TimeSelector'
import { FormInput } from '../FormInput'

type DueDateProps = {
  dueDate: TodoDateTime,
  setDueDate: React.Dispatch<React.SetStateAction<TodoDateTime>>
}

const SetDueDate = ({ dueDate, setDueDate }: DueDateProps) => {
  const years = useYearsFromNow(10)
  const months = getMonths()
  const daysOfMonth = useDaysOfMonth(new Date(dueDate.year, dueDate.month))
  const hoursFormat = useHoursFormat(dueDate.isAmPm)
  const minutes = getMinutes()
  const ampm = ['AM', 'PM']

  useEffect(() => {
    console.log('Due Date:', dueDate)
  }, [dueDate])

  return (
    <div className='flex flex-col w-full'>
      <div className='flex'>
        <p>Selected Date/Time:</p>
        <p className='ml-2 font-semibold'>{ getDateString(dueDate) }</p>
      </div>
      <ScrollSelector>
        <ItemList 
          key={years.toString()}
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
          key={daysOfMonth}
          items={Array.from({ length: daysOfMonth }).map((_, index) => (index+1).toString())} 
          title='Day'
          currentValue={dueDate.day - 1} 
          onClick={(value: number) => {
            const day = value + 1
            setDueDate({ ...dueDate, day: day })
          }} 
        />
        <ItemList
          key={hoursFormat.toString()} 
          items={hoursFormat} 
          title='Hour'
          currentValue={dueDate.isAmPm ? dueDate.hours - 12 : dueDate.hours}
          onClick={(value: number) => {
            const hour = dueDate.isAmPm 
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
        {dueDate.isAmPm &&
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
      </ScrollSelector>
    </div>
  )
}

export default SetDueDate