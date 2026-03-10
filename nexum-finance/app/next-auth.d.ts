import NextAuth, { NextAuthOption, DefaultSession } from "next-auth";

declare module "@next-auth/prisma-adapter" {
  import { Adapter } from "next-auth/adapters";
  import { PrismaClient } from "@prisma/client";
  export function PrismaAdapter(prismaClient: PrismaClient): Adapter;
}


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
  }
}