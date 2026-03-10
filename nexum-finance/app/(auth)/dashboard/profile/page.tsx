import { getServerSession } from "next-auth";
import { db } from "@/app/lib/db";
import { User, Mail, Calendar, ShieldCheck } from "lucide-react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NavDashboard from "../components/navDashboard";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/login");
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
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-zinc-500 italic">No banking account found for this user.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-4 md:p-8 lg:p-12">
      {/* Container fluido que expande até 1600px */}
      <div className="max-w-[1600px] mx-auto space-y-10">
        
        {/* Navigation Bar */}
        <NavDashboard />

        {/* Page Header */}
        <div className="space-y-2 px-2">
          <h1 className="text-4xl font-bold tracking-tight">My Profile</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Manage your personal information, account settings, and security preferences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN: Basic Information */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <User className="h-12 w-12 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {userAccount.user.name}
                </h2>
                <p className="text-zinc-500 font-medium">Nexum Finance Client</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Email Field */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <div className="bg-emerald-500/10 p-2 rounded-lg">
                  <Mail className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Email Address</p>
                  <p className="text-base text-zinc-200">{userAccount.user.email}</p>
                </div>
              </div>

              {/* Created At Field */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <div className="bg-emerald-500/10 p-2 rounded-lg">
                  <Calendar className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Member Since</p>
                  <p className="text-base text-zinc-200">
                    {new Date(userAccount.user.createdAt).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* Status Field */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <div className="bg-emerald-500/10 p-2 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Account Status</p>
                  <p className="text-base text-emerald-400 font-bold flex items-center gap-2">
                    Verified <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Security Settings */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 space-y-8 shadow-2xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">Security</h3>
              <p className="text-zinc-500">
                Enhance your account security and manage access methods.
              </p>
            </div>

            <div className="space-y-2">
              {/* 2FA Row */}
              <div className="flex items-center justify-between py-6 border-t border-white/5 group">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                    Two-Factor Authentication (2FA)
                  </p>
                  <p className="text-sm text-zinc-500 max-w-md">
                    Adds an extra layer of security to your account by requiring more than just a password.
                  </p>
                </div>
                <Button variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white border-none px-6 font-bold">
                  Enable
                </Button>
              </div>

              {/* Password Row */}
              <div className="flex items-center justify-between py-6 border-t border-white/5 group">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                    Password
                  </p>
                  <p className="text-sm text-zinc-500">
                    Update your password regularly to keep your account safe.
                  </p>
                </div>
                <Button variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white border-none px-6 font-bold">
                  Change
                </Button>
              </div>

              {/* Sessions Row */}
              <div className="flex items-center justify-between py-6 border-t border-white/5 group">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                    Active Sessions
                  </p>
                  <p className="text-sm text-zinc-500">
                    You are currently logged in on this device.
                  </p>
                </div>
                <Button variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white border-none px-6 font-bold">
                  Manage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}