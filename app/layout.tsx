import type { Metadata } from 'next';
import { Nunito_Sans } from "next/font/google";
import { metadata as siteMetadata, PersonJsonLd, generateMetadata as siteGenerateMetadata } from './metadata';
import ClientWrapper from './ClientWrapper';
import "./globals.css";

export { siteGenerateMetadata as generateMetadata };
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
        {/* The Gold Standard: Explicitly defining the single "Source of Truth" URL */}
        <link rel="canonical" href="https://hammadulhaq-seven.vercel.app/" />
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