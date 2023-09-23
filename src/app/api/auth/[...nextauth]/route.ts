import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const nextAuthOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    session: async ({session, user}) => {
      const todoSession = {...session, id: user.id}
      return Promise.resolve(todoSession)
    }
  },
  session: {
    maxAge: 30,
  },
  pages: {
    signIn: 'login'
  }
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };