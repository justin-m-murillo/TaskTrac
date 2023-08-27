'use client'
import React, { useState } from 'react'
import Calendar from '@/components/Calendar'

import { useTodoListContext } from '@/context/TodoListContext'
import { useTodoNavContext } from '@/context/TodoNavContext'
import styles from './styles'

import { actionCreateTodo } from '@/actions/actionsTodo'
import useDateTime from '@/hooks/useDateTime'
import { TodoDateTime } from '@/types/Todo'
import ScrollSelector from '@/components/ScrollSelector'
import ItemList from '@/components/ScrollSelector/ItemList'
import SetDueDate from '@/components/SetDueDate'
import { FormAreaInput, FormTextInput } from '@/components/FormInput'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December', 
]

const hoursAmPm = [
  '1','2','3','4','5','6','7','8','9','10','11','12'
]

const minutes = [
  '00','01','02','03','04','05','06','07','08','09',
  '10','11','12','13','14','15','16','17','18','19',
  '20','21','22','23','24','25','26','27','28','29',
  '30','31','32','33','34','35','36','37','38','39',
  '40','41','42','43','44','45','46','47','48','49',
  '50','51','52','53','54','55','56','57','58','59',
]

const PageAddTodo = () => {
  const { setActiveTab } = useTodoNavContext()
  const { todos, setTodos } = useTodoListContext()
  const [ dueDate, setDueDate ] = useState<TodoDateTime>(() => {
    const current = new Date()
    return {
      year:    current.getFullYear(),
      month:   current.getMonth(),
      day:     current.getDate(),
      hours:   current.getHours(),
      minutes: current.getMinutes(),
      isAmPm: true,
      ampm: current.getHours() > 11 ? 'PM' : 'AM'
  }})
  
  return (
    <form 
      className={styles.root}
      action={data => {
          const due = new Date(
            dueDate.year,
            dueDate.month,
            dueDate.day,
            dueDate.hours,
            dueDate.minutes,
          )
          actionCreateTodo(data, due, setActiveTab, {todos, setTodos}) 
        }
      } 
    >
      {/* Title */}
      <FormTextInput name='title' />

      {/* Location */}
      <FormTextInput name='location' />
      
      {/* Description */}
      <FormAreaInput name='description' />

      {/* Select Due Date */}
      
      <SetDueDate dueDate={dueDate} setDueDate={setDueDate} />

      <div className='flex mt-2 justify-end'>
        <button
          className={styles.button}
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default PageAddTodo