'use server'
import { redirect } from 'next/navigation'

const Index = () => {
  redirect('/home')
}

export default Index