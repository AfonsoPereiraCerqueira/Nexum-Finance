"use client";

import { useActionState } from "react";
import { registerUser } from "../../lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";


export default function Register() {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <Card className="w-full max-w-md bg-zinc-900/50 border-white/10 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-emerald-500">
            Create Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Input
              name="name"
              placeholder="Full Name"
              className="bg-white/5 border-white/10"
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              className="bg-white/5 border-white/10"
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="bg-white/5 border-white/10"
              required
            />
            <div className="flex items-center gap-2">
                <Checkbox id="terms" className="bg-white/5 border-white/10" required />
                <label htmlFor="terms" className="text-sm text-gray-400">
                    I agree to the{" "}<a href="#" className="text-emerald-500 hover:underline">
                    Terms and Conditions
                    </a>
                </label>
            </div>
            {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
            <Button className="w-full bg-emerald-500 text-black hover:bg-emerald-400 font-bold">
              {isPending ? "Creating account..." : "Open My Account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
