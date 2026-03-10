"use server";

import { db } from "./db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export async function registerUser(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        account: {
          create: {
            balance: 100.0,
            accountNumber: Math.floor(
              10000000 + Math.random() * 90000000,
            ).toString(),
          },
        },
      },
    });
  } catch (error) {
    return { success: false, error: "Este email já está registado." };
  }

  redirect("/dashboard");
}

export async function loginUser(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // ESTA LINHA CONECTA COM O TEU ROUTE.TS
    // O NextAuth vai pegar esses dados e passar para o 'authorize' da route.ts
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Mantemos false para capturar erros aqui
    });

    if (result?.error) {
      return { success: false, error: "Email ou senha incorretos." };
    }
  } catch (error: any) {
    // O NextAuth às vezes lança um erro que é na verdade um redirecionamento
    if (error.type === "CredentialsSignin") {
        return { success: false, error: "Credenciais inválidas." };
    }
    // Se for um erro de redirecionamento do Next.js, deixa ele passar
    if (error.message?.includes("NEXT_REDIRECT")) throw error;
    
    return { success: false, error: "Erro inesperado." };
  }

  // Se chegou aqui, o NextAuth já criou o cookie de sessão com o ID!
  redirect("/dashboard");
}