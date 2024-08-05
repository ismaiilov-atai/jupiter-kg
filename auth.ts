import NextAuth from "next-auth"
import { authConfig } from './src/config'
import { PrismaAdapter } from "@auth/prisma-adapter"
import type { Adapter } from "next-auth/adapters"

import { db } from '@/lib/db'
import { refreshToken } from '@/lib/actions/refresh-token'
import { ClientUserSession } from '@/lib/types/next-auth'


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  ...authConfig,
  callbacks: {
    redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, user }) {
      await refreshToken({ userId: user.id, session });

      const userClientSession: ClientUserSession = {
        id: session.user.id,
        email: session.user.email,
        emailVerified: session.user.emailVerified,
        image: session.user.image,
        role: session.user.role,
      }

      return {
        ...session,
        user: userClientSession
      };
    },
  }
})