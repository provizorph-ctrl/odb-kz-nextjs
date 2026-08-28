"use client";

import { LangProvider } from "@/lib/lang-context";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
