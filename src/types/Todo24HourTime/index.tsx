import React from 'react'

export type Todo24HourState = {
  is24HourTime: boolean,
  setIs24HourTime: React.Dispatch<React.SetStateAction<boolean>>,
}