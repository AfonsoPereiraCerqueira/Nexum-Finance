"use server";

import { db } from "./db";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

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
