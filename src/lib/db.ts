// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

declare global {
  var __globalPrisma: PrismaClient | undefined;
}

const prisma =   // ← changed here from 'var' to 'const'
  global.__globalPrisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

if (process.env.NODE_ENV === "development") {
  global.__globalPrisma = prisma;
}

export const db = prisma;   // ← export the const prisma as db
