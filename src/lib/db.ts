// src/lib/db.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // Prevent multiple instances of Prisma Client in development
  // (due to hot-reloading).
  var __globalPrisma: PrismaClient | undefined;
}

export const db: PrismaClient =
  global.__globalPrisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

if (process.env.NODE_ENV === "development") {
  global.__globalPrisma = db;
}
