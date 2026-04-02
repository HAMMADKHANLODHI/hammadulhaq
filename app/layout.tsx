import type { Metadata } from 'next';
import { Nunito_Sans } from "next/font/google";
// Import both the static object and the dynamic function
import { metadata as siteMetadata, PersonJsonLd, generateMetadata as siteGenerateMetadata } from './metadata';
import ClientWrapper from './ClientWrapper';
import "./globals.css";

// Re-export the dynamic function for Next.js to use at the root level
export { siteGenerateMetadata as generateMetadata };

// Export the static metadata as a fallback for static pages
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