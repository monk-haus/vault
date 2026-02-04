import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./globals.css";

const hero = localFont({
  src: "../fonts/Hero-Light.ttf",
  variable: "--font-hero",
  display: "swap",
});

const lamea = localFont({
  src: "../fonts/Lamea.otf",
  variable: "--font-lamea",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAULT",
  description: "The Agentic Operating System for Premium Retail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hero.variable} ${lamea.variable}`}>
      <body className="antialiased selection:bg-zinc-200 selection:text-black dark:selection:bg-zinc-800 dark:selection:text-white">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}