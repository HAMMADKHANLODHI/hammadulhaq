import type { Metadata } from 'next';
import { Nunito_Sans } from "next/font/google";
import { metadata as siteMetadata } from './metadata';
import ClientWrapper from './ClientWrapper';
import "./globals.css";

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
        {/* HARDCODED BING VERIFICATION — This fixes the "Body tag not found" error */}
        <meta name="msvalidate.01" content="B36F72D4B1FFE4A23464398AF62BF5F0" />
        
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`min-h-screen min-w-screen ${nunito.variable} font-sans bg-white antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}