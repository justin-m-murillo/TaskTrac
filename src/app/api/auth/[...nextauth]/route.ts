import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../../../../db/prisma";

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
      if (session && session.user) {
        session.user.id = user.id
      }
      return Promise.resolve(session)
    }
  },
  session: {
    maxAge: 30 * 24 * 60 * 60,
  },
}

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };