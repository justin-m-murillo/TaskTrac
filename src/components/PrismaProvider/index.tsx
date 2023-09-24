import React, { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'
import ContextWrapper from '../ContextWrapper'

type PrismaProviderProps = {
  children: ReactNode;
}

const PrismaProvider = async ({ children }: PrismaProviderProps) => {
  const session = await getServerSession(authOptions);
  const data = session && session.user 
    ? await prisma.user.findUnique({
      where: {
        email: session.user.email as string | undefined
      },
    })
    : null

  return (
    <ContextWrapper>
      {children}
    </ContextWrapper>
  )
}

export default PrismaProvider