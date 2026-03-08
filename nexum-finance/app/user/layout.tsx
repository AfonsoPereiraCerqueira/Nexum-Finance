import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "../globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/navbar";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', // Definimos uma variável CSS para usar no Tailwind
  weight: ['300', '400', '600', '700'], // Escolhe os pesos que vais usar
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexum Finance",
  description: "Nexum Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const options = [
    { name: "home", label: "Home", href: "/" },
    { name: "about", label: "About", href: "/about" },
    { name: "contact", label: "Contact", href: "/contact" },
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
