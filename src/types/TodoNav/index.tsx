import React from 'react'

export type TodoNavState = {
  activeTab: string,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>,
}