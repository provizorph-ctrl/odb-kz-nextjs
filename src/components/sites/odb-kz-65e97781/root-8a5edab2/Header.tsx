"use client";

import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-white hidden sm:block">
        <div className="container mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-4 text-xs">
            {contacts.slice(0, 1).map((c) => (
              <a
                key={c.label}
                href={`tel:${c.value.replace(/[^+0-9]/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">{c.value}</span>
              </a>
            ))}
            <span className="text-white/40">|</span>
            <span className="text-white/70">{t("schedule")}</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white shadow-soft border-b border-border/50">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="size-9 sm:size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <svg className="size-5 sm:size-7 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-primary leading-tight font-[family-name:var(--font-heading)]">{t("hospitalShort")}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{t("hospitalFullName")}</div>
            </div>
          </a>

          {/* Desktop lang + search */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs" role="group" aria-label="Language switcher">
              {(["ru", "en", "kz"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    lang === l
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Burger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden size-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={t("menuLabel")}
            aria-expanded={mobileOpen}
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="bg-white border-b border-border/50 hidden lg:block" aria-label="Main navigation">
        <div className="container mx-auto px-4">
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

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-b border-border/50 shadow-lg" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-3">
            {/* Mobile lang switcher */}
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100" role="group" aria-label="Language switcher">
              {(["ru", "en", "kz"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    lang === l
                      ? "bg-primary text-white"
                      : "text-muted-foreground bg-gray-100 hover:bg-primary/10"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            {/* Mobile menu items */}
            <ul className="space-y-1" role="menu">
              {menu.map((item) => (
                <li key={item.id} role="none">
                  <a
                    href={item.url}
                    onClick={() => setMobileOpen(false)}
                    role="menuitem"
                    className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                  >
                    {langLabel(item, lang)}
                  </a>
                  {item.children && item.children.length > 0 && (
                    <ul className="pl-4 space-y-0.5" role="menu">
                      {item.children.map((child) => (
                        <li key={child.id} role="none">
                          <a
                            href={child.url}
                            onClick={() => setMobileOpen(false)}
                            role="menuitem"
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
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
      )}
    </header>
  );
}
