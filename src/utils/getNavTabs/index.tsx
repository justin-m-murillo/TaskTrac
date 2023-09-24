import React from 'react'
import TodoNavTab from '@/components/TodoNavTab'
import { MdHome, MdChecklist, MdDeleteOutline, MdAdd, MdMenu, MdMenuOpen, MdSettings, } from 'react-icons/md'


const getNavTabs = (onClick: (href?: string) => void) => {
  const tabIconSize = 20
  const menuIconSize = 24
  
  return [
    <TodoNavTab
      key='home'
      title='Home' 
      Icon={MdHome} 
      iconSize={tabIconSize}
      href='/'
      onClick={onClick}
    />,
    <TodoNavTab
      key='completed'
      title='Completed' 
      Icon={MdChecklist}
      iconSize={tabIconSize} 
      href='/completed-todos'
      onClick={onClick}
    />,
    <TodoNavTab 
      key='deleted'
      title='Deleted'
      Icon={MdDeleteOutline}
      iconSize={tabIconSize} 
      href='/deleted-todos'
      onClick={onClick}
    />,
    <TodoNavTab
      key='add'
      title='Add'
      Icon={MdAdd}
      iconSize={tabIconSize}
      href='/add-todo'
      onClick={onClick}
    />,
    <TodoNavTab
      key='menu' 
      Icon={MdSettings}
      iconSize={menuIconSize}
      href='/settings'
      onClick={onClick}
    />
  ]
}

export default getNavTabs