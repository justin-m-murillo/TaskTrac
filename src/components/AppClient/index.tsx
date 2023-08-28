'use client'
import React, { ReactNode, useState } from 'react'
import { TodoNavContext } from '@/context/TodoNavContext'
import { TodoListContext } from '@/context/TodoListContext'
import { Todo24HourContext } from '@/context/Todo24HourTime'
import { Todo } from '@/types/Todo'
import { usePathname, useRouter } from 'next/navigation'

import { MdHome, MdChecklist, MdDeleteOutline, MdAdd, MdMenu, MdMenuOpen, MdSettings, } from 'react-icons/md'
import styles from './styles'

import TodoNav from '../TodoNav'
import TodoNavTab from '../TodoNavTab'

type Props = {
  data: Todo[],
  children: ReactNode
}

const tabIconSize = 20
const menuIconSize = 24

const AppClient = ({ data, children }: Props) => {
  const pathname = usePathname()
  const router = useRouter()
  const [ menuOpen, setMenuOpen ] = useState<boolean>(false)
  const [ activeTab, setActiveTab ] = useState<string>(pathname)
  const [ todos, setTodos ] = useState<Todo[]>(data)
  const [ is24HourTime, setIs24HourTime ] = useState<boolean>(false)

  // MENU TABS & CONTROLS

  const handleTabClick = (href?: string) => {
    if (href) {
      setActiveTab(href)
      router.push(href)
    }
  }

  const menuTabControls = {
    open: 
      <div>
        <TodoNavTab
          Icon={MdMenu}
          iconSize={menuIconSize}
          onClick={() => {
            setMenuOpen(true)
          }}
          isStatic
        />
      </div>,
    close:
      <div className='mr-8'>
        <TodoNavTab
          Icon={MdMenuOpen}
          iconSize={menuIconSize}
          onClick={() => {
            setMenuOpen(false)
          }}
          isStatic
        />
      </div>, 
  }

  const menuTabList = [
    <TodoNavTab 
      title='Home' Icon={MdHome} iconSize={tabIconSize}
      href='/home' activeTab={activeTab} onClick={handleTabClick}
    />,
    <TodoNavTab
      title='Completed' 
      Icon={MdChecklist}
      iconSize={tabIconSize} 
      href='/completed-todos'
      activeTab={activeTab}
      onClick={handleTabClick}
    />,
    <TodoNavTab 
      title='Deleted'
      Icon={MdDeleteOutline}
      iconSize={tabIconSize} 
      href='/deleted-todos'
      activeTab={activeTab}
      onClick={handleTabClick}
    />,
    <TodoNavTab
      title='Add'
      Icon={MdAdd}
      iconSize={tabIconSize}
      href='/add-todo'
      activeTab={activeTab}
      onClick={handleTabClick}
    />,
    <TodoNavTab 
      Icon={MdSettings}
      iconSize={menuIconSize}
      onClick={() => {}}
    />
  ]

  return (
    <TodoNavContext.Provider value={{ activeTab, setActiveTab }}>
      <TodoListContext.Provider value={{ todos, setTodos }}>
        <Todo24HourContext.Provider value={{ is24HourTime, setIs24HourTime }}>
          <div className={styles.root}>
            <div className='flex flex-row mb-4 w-full justify-between'>
              {menuOpen ? menuTabControls.close : menuTabControls.open}
              <TodoNav tabs={menuTabList} isOpen={menuOpen} />
              {/* <TodoNav tabs={settingsTabList} isOpen={settingsOpen} /> */}
            </div>
            { children }
          </div>
        </Todo24HourContext.Provider>
      </TodoListContext.Provider>
    </TodoNavContext.Provider>
  )
}

export default AppClient