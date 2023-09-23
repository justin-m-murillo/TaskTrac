import React, { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

type PrismaProviderProps = {
  children: ReactNode;
}

const PrismaProvider = async ({ children }: PrismaProviderProps) => {
  const session = await getServerSession(nextAuthOptions);
  console.log('Prisma Provider', session)

  return (
    <>
      {children}
    </>
  )
}

export default PrismaProvider