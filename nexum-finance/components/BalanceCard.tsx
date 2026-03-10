"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

interface BalanceCardProps {
  balance: number;
  accountNumber: string;
}

export function BalanceCard({ balance, accountNumber }: BalanceCardProps) {
  const [viewBalance, setviewBalance] = useState(false);

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Wallet size={80} />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-zinc-400 text-sm font-medium">
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 mr-2 hover:bg-transparent" // p-0 tira o espaço, mr-2 afasta do texto
            onClick={() => setviewBalance(!viewBalance)}
          >
            {viewBalance ? <Eye size={16} /> : <EyeOff size={16} />}
          </Button>
          Available Balance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "text-4xl font-bold text-emerald-500 mb-1" +
              (viewBalance ? "" : " blur-sm"),
          )}
        >
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(balance)}
        </div>
        <p className="text-zinc-500 text-xs">Acc: {accountNumber}</p>
      </CardContent>
    </Card>
  );
}
