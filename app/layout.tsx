import type { Metadata } from 'next';
import { Nunito_Sans } from "next/font/google";
import { metadata as siteMetadata, PersonJsonLd } from './metadata';
import ClientWrapper from './ClientWrapper';
import "./globals.css";

// This export handles OG (Facebook), Twitter (X), and Canonical tags automatically
export const metadata: Metadata = siteMetadata;

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 1. HARDCODED BING VERIFICATION — Bypasses Next.js streaming issues for Bingbot */}
        <meta name="msvalidate.01" content="B36F72D4B1FFE4A23464398AF62BF5F0" />
        
        {/* 2. Existing files and Structured Data */}
        <link rel="manifest" href="/site.webmanifest" />
        <PersonJsonLd />
      </head>
      <body className={`min-h-screen min-w-screen ${nunito.variable} font-sans bg-white antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}