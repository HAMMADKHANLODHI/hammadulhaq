import { Nunito_Sans } from "next/font/google";
import { PersonJsonLd, generateMetadata as getSiteMetadata } from './metadata'; 
import ClientWrapper from './ClientWrapper';
import "./globals.css";
import type { Metadata, ResolvingMetadata } from 'next';

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

// Re-export the dynamic metadata function
export async function generateMetadata(
  props: { params: any; searchParams: { v?: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return getSiteMetadata(props, parent);
}

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