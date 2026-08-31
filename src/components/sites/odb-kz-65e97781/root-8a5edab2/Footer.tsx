"use client";

import { useLang } from "@/lib/lang-context";

interface ContactData {
  label: string;
  value: string;
}

interface FooterProps {
  contacts: ContactData[];
  settingMap: Record<string, string>;
}

const socialLinks = [
  { platform: "Facebook", url: "#", icon: "fb" },
  { platform: "YouTube", url: "#", icon: "yt" },
  { platform: "Twitter", url: "#", icon: "tw" },
];

export function Footer({ contacts, settingMap }: FooterProps) {
  const { t } = useLang();

  const footerLinks = [
    { label: t("navHome"), url: "/" },
    { label: t("navAbout"), url: "/o-nas" },
    { label: t("navNews"), url: "/news-ru" },
    { label: t("navContacts"), url: "/conact-ru" },
  ];

  return (
    <footer className="bg-foreground text-white mt-auto" role="contentinfo">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0">
                <img src="/images/logo.jpeg" alt="ОДБ" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-lg font-bold leading-tight font-[family-name:var(--font-heading)]">{t("hospitalShort")}</div>
                <div className="text-xs text-white/60 leading-tight">
                  {settingMap.hospital_name || t("hospitalFullName")}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              {settingMap.siteDescription || t("siteDescription")}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="size-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label={social.platform}
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon === "fb" && (
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    )}
                    {social.icon === "yt" && (
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                    )}
                    {social.icon === "tw" && (
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
              <div className="w-5 h-0.5 bg-primary rounded-full" aria-hidden="true" />
              {t("contactsTitle")}
            </h4>
            <div className="space-y-3">
              {contacts.map((contact) => (
                <div key={contact.label}>
                  <span className="text-xs text-white/50 block">{contact.label}</span>
                  <span className="text-sm font-medium">{contact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
              <div className="w-5 h-0.5 bg-primary rounded-full" aria-hidden="true" />
              {t("navigation")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
              <div className="w-5 h-0.5 bg-primary rounded-full" aria-hidden="true" />
              {t("feedback")}
            </h4>
            <a
              href="/conact-ru"
              className="cta-secondary border-white/20 text-white hover:bg-white hover:text-foreground"
            >
              {t("writeUs")}
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-xs text-white/50">
              &copy; 2026 {settingMap.siteName || t("hospitalFullName")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
