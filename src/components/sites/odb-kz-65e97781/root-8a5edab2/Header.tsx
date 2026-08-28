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

import { useLang } from "@/lib/lang-context";

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
  const { lang, setLang } = useLang();
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 flex items-center justify-between h-10">
          <div className="flex items-center gap-4 text-xs">
            {contacts.slice(0, 1).map((c) => (
              <a
                key={c.label}
                href={`tel:${c.value.replace(/[^+0-9]/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
              >
                <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">{c.value}</span>
              </a>
            ))}
            <span className="text-white/40">|</span>
            <span className="hidden sm:inline text-white/70">Пн-Пт: 8:00 - 17:00</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="size-7 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors" aria-label="Карта сайта">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <button className="size-7 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors" aria-label="Версия для слабовидящих">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-soft border-b border-border/50">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <a href="/" className="flex items-center gap-3 group">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <svg className="size-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-primary leading-tight">ОДБ</div>
              <div className="text-xs text-muted-foreground leading-tight">Областная детская больница</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs">
              {(["ru", "en", "kz"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                    lang === l
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <button className="size-9 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-soft" aria-label="Поиск">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {menu.map((item) => (
              <li key={item.id} className="relative group flex-shrink-0">
                <a
                  href={item.url}
                  className="flex items-center gap-1 px-3.5 py-3 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {langLabel(item, lang)}
                  {item.children && item.children.length > 0 && (
                    <svg className="size-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && item.children.length > 0 && (
                  <ul className="absolute top-full left-0 bg-white shadow-medium rounded-b-xl min-w-[220px] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-border/50">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={child.url}
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

      <div className="bg-secondary/50 border-b border-border/30">
        <div className="container mx-auto px-4 py-1.5 flex justify-end">
          <a
            href="/admin/login"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Войти</span>
          </a>
        </div>
      </div>
    </header>
  );
}
