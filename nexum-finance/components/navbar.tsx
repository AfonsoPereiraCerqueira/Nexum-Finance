"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

// Importações do shadcn/ui
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const options = [
    { label: "Features", href: "#features", name: "features" },
    { label: "Security", href: "#security", name: "security" },
    { label: "About", href: "#about", name: "about" },
  ];

  return (
    <nav className="bg-background w-full h-16 text-white flex items-center px-4 border-b border-emerald-500 font-sans sticky top-0 z-50">
      {/* 1. LADO ESQUERDO: Logo */}
      <div className="flex-1 flex items-center justify-start">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/nexum-png.svg"
            alt="Nexum Logo"
            width={40}
            height={40}
            className="brightness-110"
          />
          <span className="text-white font-bold text-lg md:text-xl tracking-tight">
            NEXUM{" "}
            <span className="text-emerald-500 hidden sm:inline">FINANCE</span>
          </span>
        </Link>
      </div>

      {/* 2. CENTRO: Links Desktop (hidden em mobile, flex em md+) */}
      <div className="hidden md:flex flex-1 justify-center gap-8">
        {options.map((option) => (
          <Link
            key={option.name}
            href={option.href}
            className="text-sm font-medium text-muted-foreground hover:text-emerald-500 transition-colors whitespace-nowrap"
          >
            {option.label}
          </Link>
        ))}
      </div>

      {/* 3. LADO DIREITO: Login + Sheet para Mobile */}
      <div className="flex-1 flex justify-end gap-4 items-center">
        <a href="/login">
          <Button
            variant="ghost"
            className="hidden md:flex text-sm font-medium transition-all hover:scale-105 hover:text-emerald-500"
          >
            
              Login
          </Button>
        </a>

        {/* MENU MOBILE (Sheet do shadcn) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="bg-background border-emerald-500 text-white"
            >
              <SheetHeader className="px-6 pt-4">
                {" "}
                {/* Padding aqui */}
                <SheetTitle className="text-emerald-500 font-bold text-left font-sans">
                  NEXUM MENU
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-8 px-6 pb-10">
                {" "}
                {/* Padding horizontal e bottom */}
                {options.map((option) => (
                  <Link
                    key={option.name}
                    href={option.href}
                    className="text-xl font-medium hover:text-emerald-500 transition-colors font-sans border-b border-white/5 pb-2"
                  >
                    {option.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <Button className="w-full bg-emerald-500 text-black font-bold h-12 text-lg">
                    Open Account
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/20 text-white h-12"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
