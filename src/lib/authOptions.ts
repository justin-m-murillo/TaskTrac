import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_SECRET!;

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    signIn: async ({ account, profile }) => {
      if (!profile?.email) {
        throw new Error("No profile");
      }

      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name ?? undefined,
          created_at: new Date(),
          updated_at: new Date(),
        },
        update: {
          name: profile.name,
        },
      });
      return Promise.resolve(true);
    },
    async jwt({ token, user, account, profile }) {
      if (profile) {
        const user = await prisma.user.findUnique({
          where: {
            email: profile.email,
          },
        });
        if (!user) {
          throw new Error("No user found");
        }
        token.id = user.id;
      }
      return token;
    },
  },
};