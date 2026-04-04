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
        {/* REMOVED: Manual canonical link. 
          Next.js 16 handles this via the exported 'metadata' object.
        */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Keep this in the <head> so crawlers find it immediately */}
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