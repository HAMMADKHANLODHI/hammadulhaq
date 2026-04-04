import type { Metadata } from 'next';
import { Nunito_Sans } from "next/font/google";
// 1. Remove siteGenerateMetadata from the import list
import { metadata as siteMetadata, PersonJsonLd } from './metadata';
import ClientWrapper from './ClientWrapper';
import "./globals.css";

// 2. Remove the "export { siteGenerateMetadata... }" line
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
        {/* Next.js 15+ handles canonical via the metadata object, 
            but keeping this here doesn't hurt. */}
        <link rel="canonical" href="https://hammadulhaq-seven.vercel.app/" />
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