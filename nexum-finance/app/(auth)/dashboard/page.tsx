import { db } from "@/app/lib/db";
import { getServerSession  } from "next-auth";
import { BalanceCard } from "@/components/BalanceCard";
import NavDashboard from "./components/navDashboard";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <div>Please log in to view your dashboard.</div>;
  }

  const userAccount = await db.account.findFirst({
    where: {
      userId: session.user.id,
    },
    include: {
      user: true,
    },
  });

  if (!userAccount) {
    return <div>No account found.</div>;
  }

  return (
    <main className="min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <NavDashboard />
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
            <p className="text-xl font-semibold uppercase tracking-widest">Nexum {userAccount.user.plan}</p>
            <Button className="mt-4 transition-all hover:scale-105 hover:bg-emerald-500" asChild>
              <a href="/plans">Change Plan</a>
            </Button>
            <Button variant="outline" className="mt-4 transition-all hover:scale-105 hover:text-emerald-500" asChild>
              <a href="/plans">View Details</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}