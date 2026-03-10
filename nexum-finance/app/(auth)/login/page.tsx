"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    // O signIn vai chamar o 'authorize' da sua route.ts
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Importante para controlarmos o erro aqui no cliente
    });

    if (result?.error) {
      // O erro que você deu 'throw' no authorize aparece aqui
      setError("Email ou senha incorretos.");
      setIsPending(false);
    } else {
      // Sucesso! O cookie foi criado e o ID está na sessão.
      router.push("/dashboard");
      router.refresh(); // Garante que o layout pegue a nova sessão
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <Card className="w-full max-w-md bg-zinc-900/50 border-white/10 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-emerald-500">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="email" type="email" placeholder="Email" required />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              required
            />

            {/* Exibição do Erro */}
            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-emerald-500 text-black font-bold"
            >
              {isPending ? "Autenticando..." : "Entrar na Nexum"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
