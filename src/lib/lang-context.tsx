"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { t as translate, type Lang, type TranslationKey } from "@/lib/translations";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
  locale: string;
}

const LangContext = createContext<LangContextType>({
  lang: "ru",
  setLang: () => {},
  t: (key) => key,
  locale: "ru-RU",
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  const locale = lang === "en" ? "en-US" : lang === "kz" ? "kk-KZ" : "ru-RU";

  const t = (key: TranslationKey) => translate(lang, key);

  return (
    <LangContext.Provider value={{ lang, setLang, t, locale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
