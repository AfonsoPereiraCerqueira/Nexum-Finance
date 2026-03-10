import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ui/theme-provider"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "./lib/Providers";

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
  icons: {
    icon: "/nexum-png.svg",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  
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
            <Providers>
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
