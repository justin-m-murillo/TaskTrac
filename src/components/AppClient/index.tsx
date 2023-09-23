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
import { useSession } from 'next-auth/react'

type Props = {
  children: ReactNode
}

const tabIconSize = 20
const menuIconSize = 24

const AppClient = ({ children }: Props) => {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()

  // const [ menuOpen, setMenuOpen ] = useState<boolean>(false)
  const [ activeTab, setActiveTab ] = useState<string>(pathname)
  const [ todos, setTodos ] = useState<Todo[]>([])
  const [ is24HourTime, setIs24HourTime ] = useState<boolean>(false)
  //const motionTabControlsProps = useMotionTabControls(menuOpen)
  
  // MENU TABS & CONTROLS

  const handleTabClick = (href?: string) => {
    if (href) {
      setActiveTab(href)
      router.push(href)
    }
  }

  const menuTabList = [
    <TodoNavTab
      key='home'
      title='Home' Icon={MdHome} iconSize={tabIconSize}
      href='/' activeTab={activeTab} onClick={handleTabClick}
    />,
    <TodoNavTab
      key='completed'
      title='Completed' 
      Icon={MdChecklist}
      iconSize={tabIconSize} 
      href='/completed-todos'
      activeTab={activeTab}
      onClick={handleTabClick}
    />,
    <TodoNavTab 
      key='deleted'
      title='Deleted'
      Icon={MdDeleteOutline}
      iconSize={tabIconSize} 
      href='/deleted-todos'
      activeTab={activeTab}
      onClick={handleTabClick}
    />,
    <TodoNavTab
      key='add'
      title='Add'
      Icon={MdAdd}
      iconSize={tabIconSize}
      href='/add-todo'
      activeTab={activeTab}
      onClick={handleTabClick}
    />,
    <TodoNavTab
      key='menu' 
      Icon={MdSettings}
      iconSize={menuIconSize}
      href='/settings'
      activeTab={activeTab}
      onClick={handleTabClick}
    />
  ]

  return (
    <TodoNavContext.Provider value={{ activeTab, setActiveTab }}>
      <TodoListContext.Provider value={{ todos, setTodos }}>
        <Todo24HourContext.Provider value={{ is24HourTime, setIs24HourTime }}>
          <div className={styles.root}>
            <div className='flex flex-row mb-4 w-full justify-between'>
              <TodoNav tabs={menuTabList} />
            </div>
            { children }
          </div>
        </Todo24HourContext.Provider>
      </TodoListContext.Provider>
    </TodoNavContext.Provider>
  )
}

export default AppClient