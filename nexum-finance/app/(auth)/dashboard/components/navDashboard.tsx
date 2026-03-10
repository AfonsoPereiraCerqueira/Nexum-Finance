"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Utilitário padrão do Shadcn para classes

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function NavDashboard() {
  const pathname = usePathname();

  return (
    <nav className="bg-zinc-900/50 p-2 rounded-xl border border-zinc-800 backdrop-blur-md">
      <ul className="flex items-center justify-center gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  isActive 
                    ? "bg-emerald-500/10 text-emerald-500" // Estilo ativo
                    : "text-zinc-400 hover:text-white hover:bg-white/5" // Estilo normal
                )}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}