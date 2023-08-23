'use server'
import React from 'react'
import { prisma } from './db'
import TodoListActive from '@/components/TodoListActive'
import TodoListEmpty from '@/components/TodoListEmpty'
import { redirect } from 'next/navigation'
import HomePage from './home/page'

const Index = () => {
  redirect('/home')
}

export default Index

const styles = {
  displayEmptyRoot: 'bg-gray-200 py-10 flex flex-col justify-center items-center'
}