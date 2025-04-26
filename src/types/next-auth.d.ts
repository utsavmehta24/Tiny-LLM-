// src/types/next-auth.d.ts
import { DefaultSession } from "next-auth";  // ← removed 'NextAuth', keep only DefaultSession

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      credits: number;
    } & DefaultSession["user"];
  }
}
