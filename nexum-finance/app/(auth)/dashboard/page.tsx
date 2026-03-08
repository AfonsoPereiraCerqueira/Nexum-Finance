import { db } from "@/app/lib/db";
import { BalanceCard } from "@/components/BalanceCard";

export default async function DashboardPage() {
  // Por enquanto, buscamos o primeiro utilizador da DB para teste
  // No futuro, usaremos o ID da sessão do NextAuth
  const userAccount = await db.account.findFirst({
    include: {
      user: true
    }
  });

  if (!userAccount) return <div>No account found.</div>;

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold">Welcome back,</h1>
            <p className="text-emerald-500 text-lg">{userAccount.user.name}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BalanceCard 
            balance={userAccount.balance} 
            accountNumber={userAccount.accountNumber} 
          />
          
          {/* Cartão de Crédito Fictício ou Atalhos */}
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 flex flex-col justify-center">
            <p className="text-zinc-400 text-sm">Nexum Plan</p>
            <p className="text-xl font-semibold uppercase tracking-widest">Nexum Black</p>
          </div>
        </div>
      </div>
    </main>
  );
}