import React, { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

import { SessionUser } from '@/types/next-auth'
import prisma from '../../../db/prisma'
import ContextWrapper from '../ContextWrapper'

type PrismaProviderProps = {
  children: ReactNode;
}

const PrismaProvider = async ({ children }: PrismaProviderProps) => {
  const session = await getServerSession(nextAuthOptions);
  const data = session && session.user 
    ? await prisma.user.findUnique({
      where: {
        id: session.user.id
      },
      include: {
        Todo: true,
      }
    })
    : null

  console.log(typeof(data?.Todo))
  return (
    <ContextWrapper>
      {children}
    </ContextWrapper>
  )
}

export default PrismaProvider