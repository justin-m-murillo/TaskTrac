import { useState, useEffect } from 'react'
import { differenceInDays, endOfMonth, getDaysInMonth, setYear, startOfMonth } from 'date-fns'
import { TodoDateTime } from '@/types/Todo'

export const evalHoursAmPm = (ampm: string|null, hours: number) => {
  if (!ampm) 
    return hours
  else if (ampm === 'AM' && hours > 11) {
    return hours - 12
  }
  else if (ampm === 'PM' && hours < 12) {
    return hours + 12
  }
  else return hours
}

export const getDateString = (date: TodoDateTime) => {
  let dateStr = `${getMonths()[date.month].value} ${date.day}, ${date.year}`
  if (date.isAmPm && date.ampm) {
    const hours = date.hours % 12
    return dateStr + ` - ${hours}:${date.minutes} ${date.ampm}`
  }
  else {
    return dateStr + ` - ${date.hours}:${date.minutes}`
  }
}

export const getMinutes = () => {
  return [
    '00','01','02','03','04','05','06','07','08','09',
    '10','11','12','13','14','15','16','17','18','19',
    '20','21','22','23','24','25','26','27','28','29',
    '30','31','32','33','34','35','36','37','38','39',
    '40','41','42','43','44','45','46','47','48','49',
    '50','51','52','53','54','55','56','57','58','59',
  ]
}

export const getMonths = () => {
  return [
    {index: 0, value: 'January'},
    {index: 1, value: 'February'},
    {index: 2, value: 'March'},
    {index: 3, value: 'April'},
    {index: 4, value: 'May'},
    {index: 5, value: 'June'},
    {index: 6, value: 'July'},
    {index: 7, value: 'August'},
    {index: 8, value: 'September'},
    {index: 9, value: 'October'},
    {index: 10, value: 'November'},
    {index: 11, value: 'December'},
  ]
}

export const useDaysOfMonth = (date: Date) => {
  const [ daysOfMonth, setDaysOfMonth ] = useState<number>(0)
  
  useEffect(() => {
    const days = getDaysInMonth(date)
    setDaysOfMonth(days)
  }, [date])

  return daysOfMonth
}

export const useHoursFormat = (isAmPm: boolean) => {
  const [ hoursFormat, setHoursFormat ] = useState<string[]>([])

  const hoursAmPm = [
    '12','1','2','3','4','5','6','7','8','9','10','11',
  ]
  const hoursFull = [
    '00','01','02','03','04','05','06','07','08','09','10','11','12',
    '13','14','15','16','17','18','19','20','21','22','23',
  ]

  useEffect(() => {
    if (isAmPm)
      setHoursFormat(hoursAmPm)
    else
      setHoursFormat(hoursFull)
  }, [isAmPm])

  return hoursFormat
}

export const useYearsFromNow = ( numYearsAhead: number, startDate?: Date) => {
  const [ yearsFromNow, setYearsFromNow ] = useState<number[]>([])

  useEffect(() => {
    let years:number[] = []
    Array.from({ length: numYearsAhead+1 }).map((_, index) => {
      if (!startDate) {
        years.push(new Date().getFullYear() + index)
      }
      else {
        years.push(startDate.getFullYear() + index)
      }
    })

    setYearsFromNow(years)
  }, [numYearsAhead, startDate])

  return yearsFromNow
}