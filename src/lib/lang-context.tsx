"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en" | "kz";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (ru: string, en?: string, kz?: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "ru",
  setLang: () => {},
  t: (ru) => ru,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  const t = (ru: string, en?: string, kz?: string) => {
    switch (lang) {
      case "en": return en || ru;
      case "kz": return kz || ru;
      default: return ru;
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
