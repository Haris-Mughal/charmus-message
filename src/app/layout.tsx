import type { Metadata } from "next";
import { Inter, M_PLUS_1_Code } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar/page";

const inter = M_PLUS_1_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charmus Message",
  description: "Message App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
