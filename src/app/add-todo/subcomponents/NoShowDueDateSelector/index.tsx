import React from 'react'
import { DueDatePageProps, initDueDate } from '../../page'
import TextRowSelector from '@/components/TextRowSelector'
import TextRowOption from '@/components/TextRowSelector/TextRowOption'


const NoShowDueDateSelector = ({ option, setDueDate, setShowDueDate }: DueDatePageProps) => {
  return (
    <TextRowSelector>
      <TextRowOption 
        option={option} 
        onClick={() => {
          setDueDate(initDueDate())
          setShowDueDate(true)
        }}
      />
    </TextRowSelector>
  )
}

export default NoShowDueDateSelector