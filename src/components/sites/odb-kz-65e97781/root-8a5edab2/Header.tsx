"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useLang } from "@/lib/lang-context";

interface MenuItemData {
  id: string;
  label: string;
  labelEn?: string;
  labelKz?: string;
  url: string;
  parentId: string | null;
  sortOrder: number;
  children?: MenuItemData[];
}

interface ContactData {
  label: string;
  value: string;
}

function langLabel(item: MenuItemData, lang: string) {
  switch (lang) {
    case "en": return item.labelEn || item.label;
    case "kz": return item.labelKz || item.label;
    default: return item.label;
  }
}

export function Header({
  menu,
  contacts,
}: {
  menu: MenuItemData[];
  contacts: ContactData[];
}) {
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar — desktop only */}
      <div className="bg-primary text-white hidden sm:block">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-4 text-xs">
            {contacts.slice(0, 1).map((c) => (
              <a
                key={c.label}
                href={`tel:${c.value.replace(/[^+0-9]/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors min-w-0"
              >
                <svg className="size-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium truncate">{c.value}</span>
              </a>
            ))}
            <span className="text-white/40">|</span>
            <span className="text-white/70">{t("schedule")}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white/95 backdrop-blur-md shadow-soft border-b border-border/50">
        <div className="max-w-[1200px] mx-auto px-4 py-3">

          {/* Desktop layout */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-xl overflow-hidden shrink-0">
                <img src="/images/logo.jpeg" alt="ОДБ" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0">
                <div className="text-lg font-bold text-primary leading-tight font-[family-name:var(--font-heading)] truncate">{t("hospitalShort")}</div>
                <div className="text-xs text-muted-foreground leading-tight truncate">{t("hospitalFullName")}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0" role="group" aria-label="Language switcher">
              {(["ru", "en", "kz"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className="min-w-[36px] h-9 px-2.5 rounded-md text-xs font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  style={{
                    backgroundColor: lang === l ? "var(--primary)" : "transparent",
                    color: lang === l ? "white" : "var(--muted-foreground)",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile layout — native details/summary */}
          <details className="lg:hidden">
            <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <div className="flex items-center gap-2 min-w-0">
                <div className="size-9 rounded-xl overflow-hidden shrink-0">
                  <img src="/images/logo.jpeg" alt="ОДБ" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-primary leading-tight font-[family-name:var(--font-heading)] truncate">{t("hospitalShort")}</div>
                  <div className="text-xs text-muted-foreground leading-tight truncate">{t("hospitalFullName")}</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-muted-foreground shrink-0 ml-2 transition-transform duration-200 open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            {/* Mobile nav content */}
            <nav className="mt-3 pt-3 border-t border-border/50" aria-label="Mobile navigation">
              {/* Lang switcher */}
              <div className="flex items-center gap-1 mb-3" role="group" aria-label="Language switcher">
                {(["ru", "en", "kz"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={(e) => { e.stopPropagation(); setLang(l); }}
                    aria-pressed={lang === l}
                    className="min-w-[36px] h-9 px-2.5 rounded-md text-xs font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    style={{
                      backgroundColor: lang === l ? "var(--primary)" : "transparent",
                      color: lang === l ? "white" : "var(--muted-foreground)",
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              {/* Menu items */}
              <ul className="space-y-0.5" role="menu">
                {menu.map((item) => (
                  <li key={item.id} role="none">
                    <a
                      href={item.url}
                      role="menuitem"
                      className="block px-3 py-3 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors min-w-0 break-words"
                    >
                      {langLabel(item, lang)}
                    </a>
                    {item.children && item.children.length > 0 && (
                      <ul className="pl-4 space-y-0.5" role="menu">
                        {item.children.map((child) => (
                          <li key={child.id} role="none">
                            <a
                              href={child.url}
                              role="menuitem"
                              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors min-w-0 break-words"
                            >
                              {langLabel(child, lang)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="bg-white border-b border-border/50 hidden lg:block" aria-label="Main navigation">
        <div className="max-w-[1200px] mx-auto px-4">
          <ul className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {menu.map((item) => (
              <li key={item.id} className="relative group flex-shrink-0">
                <a
                  href={item.url}
                  className="flex items-center gap-1 px-3.5 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {langLabel(item, lang)}
                  {item.children && item.children.length > 0 && (
                    <svg className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && item.children.length > 0 && (
                  <ul className="absolute top-full left-0 bg-white shadow-medium rounded-b-xl min-w-[220px] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-border/50" role="menu">
                    {item.children.map((child) => (
                      <li key={child.id} role="none">
                        <a
                          href={child.url}
                          role="menuitem"
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {langLabel(child, lang)}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
