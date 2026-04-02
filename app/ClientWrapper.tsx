"use client";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster as SonnerToaster, type ToasterProps } from "sonner";
import { useTheme } from 'next-themes';
import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <SonnerToaster 
        position="top-center" 
        theme={resolvedTheme as ToasterProps['theme']} 
        richColors 
      />
      {children}
      <SpeedInsights />
    </>
  );
}