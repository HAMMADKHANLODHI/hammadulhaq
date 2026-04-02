import type { Metadata } from 'next';
import { Nunito_Sans } from "next/font/google";
import { metadata as siteMetadata, PersonJsonLd } from './metadata'; // Path to your metadata file
import ClientWrapper from './ClientWrapper';
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

// THIS IS THE SEO GOLD STANDARD
export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PersonJsonLd />
      </head>
      <body className={`min-h-screen min-w-screen ${nunito.variable} font-sans bg-white`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}