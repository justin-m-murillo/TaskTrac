'use client'
import React from 'react'
import { useTodo24HourContext } from '@/context/Todo24HourTime'
import DefaultPageRoot from '@/components/DefaultPageRoot'
import TextRowSelector from '@/components/TextRowSelector'
import TextRowOption from '@/components/TextRowSelector/TextRowOption'


const Settings = () => {
  const { is24HourTime, setIs24HourTime } = useTodo24HourContext()

  return (
    <DefaultPageRoot>
      <h1 className='uppercase text-xl font-bold'>Settings</h1>
      <TextRowSelector prompt='Use 24-hour time?'>
        <TextRowOption
          option='Yes'
          isActive={is24HourTime}
          onClick={() => setIs24HourTime(true)}
        />
        <TextRowOption 
          option='No'
          isActive={!is24HourTime}
          onClick={() => setIs24HourTime(false)}
        />
      </TextRowSelector>
    </DefaultPageRoot>
  )
}

export default Settings