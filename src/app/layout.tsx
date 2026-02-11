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
  metadataBase: new URL("https://vault-dmo.pages.dev"),
  title: {
    default: "VAULT",
    template: "%s | VAULT",
  },
  description: "The Premier Operating System for Modern Retail.",
  openGraph: {
    title: "VAULT",
    description: "The Premier Operating System for Modern Retail.",
    url: "https://vault-dmo.pages.dev",
    siteName: "VAULT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAULT logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAULT",
    description: "The Premier Operating System for Modern Retail.",
    images: ["/og-image.jpg"],
  },
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
