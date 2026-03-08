import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar({ options }: { options?: any }) {
  options = options || [];

  return (
    <nav className="bg-background w-full h-16 text-white flex items-center px-4 border-b border-emerald-500 font-sans">
      <div className="flex-1 flex items-center justify-start">
        <div className="flex items-center gap-2">
          <Image
            src="/nexum-png.svg"
            alt="Nexum Logo"
            width={40}
            height={40}
            className="brightness-110"
          />
          <span className="text-white font-bold text-xl tracking-tight">
            NEXUM <span className="text-emerald-500">FINANCE</span>
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center gap-8">
        {options.map((option: any) => (
          <Link
            key={option.name}
            href={option.href}
            className="text-sm font-medium text-foreground hover:text-emerald-500 transition-colors whitespace-nowrap"
          >
            {option.label}
          </Link>
        ))}
      </div>
      <div className="flex-1 flex justify-end gap-4">
        <Button className="text-sm font-medium transition-colors hover:scale-110 transition-all">
          Login
        </Button>
      </div>
    </nav>
  );
}
