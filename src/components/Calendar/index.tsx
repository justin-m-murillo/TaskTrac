import React from 'react'
import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from 'date-fns'
import Cell from './Cell.tsx'

type CalendarProps = {
  value?: Date,
  onChange?: React.Dispatch<React.SetStateAction<Date>>
}

const daysOfWeek = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
]

const Calendar = ({ value= new Date(), onChange }: CalendarProps) => {
  const startDate = startOfMonth(value)
  const endDate = endOfMonth(value)
  const numDays = differenceInDays(endDate, startDate) + 1;

  {/* Pad cells in month to align dates with correct days */}
  const initialBlankDays = startDate.getDay()
  const finalBlankDays = 7 - (endDate.getDay() + 1)

  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }))
  const nextMonth = () => onChange && onChange(add(value, { months: 1 }))
  const prevYear = () => onChange && onChange(sub(value, { years: 1 }))
  const nextYear = () => onChange && onChange(add(value, { years: 1 }))

  const handleClickDate = (index: number) => {
    const date = setDate(value, index)
    onChange && onChange(date)
    console.log(date)
  }

  return (
    <div className='w-[400px] border'>
      <div className='grid grid-cols-7 items-center justify-center text-center'>
        <Cell onClick={prevYear}>{'<<'}</Cell>
        <Cell onClick={prevMonth}>{'<'}</Cell>
        <Cell className='col-span-3'>{format(value, 'LLLL yyyy')}</Cell>
        <Cell onClick={nextMonth}>{'>'}</Cell>
        <Cell onClick={nextYear}>{'>>'}</Cell>

        {/* Print days of the week */}
        {daysOfWeek.map(day => 
          <Cell key={day} className='text-sm font-bold uppercase'>
            {day}
          </Cell>
        )}

        {/* Print blank days at start of month */}
        {Array.from({ length: initialBlankDays }).map((_, index) => 
          <Cell key={index} />
        )}

        {/* Print all dates of the month */}
        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1
          const isCurrentDate = date === value.getDate()
          
          return (
            <Cell 
              key={index}
              isActive={isCurrentDate}
              onClick={() => handleClickDate(date)} >
              {date}
            </Cell>
          )
        })}

        {/* Print blank days at end of month */}
        {Array.from({ length: finalBlankDays }).map((_, index) =>
          <Cell key={index} />
        )}
      </div>
    </div>
  )
}

export default Calendar