import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";

interface BalanceCardProps {
  balance: number;
  accountNumber: string;
}

export function BalanceCard({ balance, accountNumber }: BalanceCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Wallet size={80} />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-zinc-400 text-sm font-medium">Available Balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-emerald-500 mb-1">
          {new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(balance)}
        </div>
        <p className="text-zinc-500 text-xs">Acc: {accountNumber}</p>
      </CardContent>
    </Card>
  );
}