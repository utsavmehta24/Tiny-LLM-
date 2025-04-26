import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";  // Import JWT for typing

// User type augmentation (in src/types/next-auth.d.ts)
declare module "next-auth" {
  interface User {
    id: string;
    credits: number;
  }
}

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,  // Explicitly typing 'jwt'
  },
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.credits = token.credits as number;
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user: User | null }) {
      if (user) {
        token.credits = user.credits;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
