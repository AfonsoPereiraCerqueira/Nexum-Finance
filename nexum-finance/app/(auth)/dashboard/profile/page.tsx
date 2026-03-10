import { getServerSession } from "next-auth";
import { db } from "@/app/lib/db";
import { User, Mail, Calendar, ShieldCheck } from "lucide-react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NavDashboard from "../components/navDashboard";


export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return <div>Please log in to view your profile.</div>;
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
    <div className="max-w-4xl mx-auto p-6 space-y-8">
    <NavDashboard />
      <div>
        <h1 className="text-3xl font-bold text-white">Meu Perfil</h1>
        <p className="text-zinc-400">
          Gere as tuas informações pessoais e segurança.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Card de Informações Básicas */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <User className="h-10 w-10 text-emerald-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{userAccount.user.name}</h2>
              <p className="text-zinc-500 text-sm">Utilizador Nexum Finance</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <Mail className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="text-xs text-zinc-500">Email</p>
                <p className="text-sm text-zinc-200">{userAccount.user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <Calendar className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="text-xs text-zinc-500">Membro desde</p>
                <p className="text-sm text-zinc-200">
                  {new Date(userAccount.user.createdAt).toLocaleDateString("en-EN", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              <div>
                <p className="text-xs text-zinc-500">Status da Conta</p>
                <p className="text-sm text-emerald-400 font-medium">
                  Verificada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card de Ações Rápidas */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-white font-medium mb-4">Segurança</h3>
          <button className="text-sm bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-colors">
            Alterar Password
          </button>
        </div>
      </div>
    </div>
  );
}
