import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Portfólio Jurandir Oliveira",
  description: "Meu portfólio desenvolvido com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/* Aqui, coloque a classe dinamicamente */}
      <body className="min-h-screen flex flex-col bg-white dark:bg-black">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1 p-0 md:p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}