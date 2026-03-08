"use server";

import db from "./db";
import bcrypt from "bcrypt";

export async function registerUser(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await db.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    account: {
                        create: {
                            balance: 0.0,
                            accountNumber: Math.floor(10000000 + Math.random() * 90000000).toString(),
                        },
                    },
                },
            });
            return user;
        });
        return { success: true, user: newUser };
    } catch (error) {
        return { success: false, error: "Email already exists or database error."}
    }
}