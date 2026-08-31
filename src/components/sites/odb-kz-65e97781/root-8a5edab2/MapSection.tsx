"use client";

import { useLang } from "@/lib/lang-context";

const NAV_LINKS = [
  {
    id: "2gis",
    label: "2ГИС",
    url: "https://2gis.kz/shymkent/search/%D0%A8%D1%8B%D0%BC%D0%BA%D0%B5%D0%BD%D1%82%2C%20%D0%9D%D1%83%D1%80%D1%81%D0%B0%D1%82%20125%2F1/firm/70000001026512657/69.62314%2C42.359543?m=69.624159%2C42.358685%2F18",
    color: "#2ba470",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
  {
    id: "yandex",
    label: "Яндекс.Карты",
    url: "https://yandex.kz/maps/221/chimkent/?ll=69.623383%2C42.358832&mode=poi&poi%5Bpoint%5D=69.622838%2C42.359420&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D218243568595&z=18",
    color: "#fc3f1d",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
  {
    id: "google",
    label: "Google Карты",
    url: "https://www.google.com/maps/place/%D0%9E%D0%B1%D0%BB%D1%8B%D1%81%D1%82%D1%8B%D2%9B+%D0%B1%D0%B0%D0%BB%D0%B0%D0%BB%D0%B0%D1%80+%D0%B5%D0%BC%D1%85%D0%B0%D0%BD%D0%B0%D1%81%D1%8B/@42.3594447,69.6134171,16z/data=!4m10!1m2!2m1!1z0KjRi9C80LrQtdC90YIsINCd0YPRgNGB0LDRgiAxMjUvMQ!3m6!1s0x38a91dab229ffeab:0xfcd594189f06022!8m2!3d42.3594447!4d69.6229443!15sCiLQqNGL0LzQutC10L3Rgiwg0J3Rg9GA0YHQsNGCIDEyNS8xkgEIaG9zcGl0YWzgAQA!16s%2Fg%2F11bwpb_t61?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
    color: "#4285f4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
];

export function MapSection() {
  const { t } = useLang();

  return (
    <section className="py-3 sm:py-4">
      <div className="flex items-center gap-2 mb-3 sm:mb-5">
        <div className="section-decoration shrink-0" aria-hidden="true" />
        <h2 className="text-base sm:text-2xl font-bold text-foreground font-[family-name:var(--font-heading)] truncate">
          {t("mapTitle")}
        </h2>
      </div>

      <details className="group rounded-lg sm:rounded-2xl border border-border/50 shadow-card bg-white open:shadow-medium transition-shadow">
        <summary className="list-none px-4 py-6 sm:px-8 sm:py-10 cursor-pointer select-none [-webkit-tap-highlight-color:transparent]">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-open:bg-primary/20 transition-colors duration-200">
              <svg className="w-5 h-5 sm:w-7 sm:h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm sm:text-lg font-bold text-foreground font-[family-name:var(--font-heading)] break-words">
                г. Шымкент, микрорайон Нурсат, 125/1
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                {t("mapHint")}
              </p>
            </div>
            <svg className="w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </summary>

        <div className="px-4 pb-4 sm:px-8 sm:pb-6">
          <div className="border-t border-border/50 pt-3 sm:pt-4">
            <p className="text-xs text-muted-foreground mb-2 sm:mb-3 font-medium uppercase tracking-wider">
              {t("mapChoose")}
            </p>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 sm:gap-3 px-3 py-3 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-white border border-border/50 shadow-sm active:scale-[0.98] transition-all duration-150 [-webkit-tap-highlight-color:transparent]"
                  style={{ color: link.color }}
                >
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-current/10 flex items-center justify-center shrink-0">
                    {link.icon}
                  </span>
                  <span className="text-sm font-semibold text-foreground truncate">
                    {link.label}
                  </span>
                  <svg className="w-4 h-4 text-muted-foreground ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </details>
    </section>
  );
}
