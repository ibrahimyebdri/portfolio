import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DynamicTitle from "../components/DynamicTitle";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibrahim Yebdri | Informatique, logiciel & systèmes",
  description: "Portfolio d’Ibrahim Yebdri — développement logiciel, web/mobile, systèmes d’information, bases de données, Cloud et data.",
  icons: {
    icon: `${basePath}/head.ico`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
        <DynamicTitle />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
